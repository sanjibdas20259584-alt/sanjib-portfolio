-- =============================================
-- Sanjib Portfolio — Supabase Database Schema
-- =============================================
-- Run this in Supabase SQL Editor (https://supabase.com/dashboard)
-- 
-- IMPORTANT:
-- 1. Admin user should be created from Supabase Auth dashboard
--    (Authentication → Users → Add User → email/password)
-- 2. Do NOT store admin password in frontend code
-- 3. Only use the anon key in frontend, never the service role key
-- =============================================

-- 1. Contact Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text,
  email text,
  phone text,
  business_name text,
  service_interest text,
  budget text,
  deadline text,
  message text,
  source_page text,
  status text DEFAULT 'new'
);

-- 2. Analytics Events
CREATE TABLE IF NOT EXISTS analytics_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  event_name text NOT NULL,
  page_path text,
  element_name text,
  category text,
  metadata jsonb,
  visitor_id text,
  session_id text,
  referrer text,
  user_agent text,
  device_type text
);

-- 3. Admin Settings (for future use)
CREATE TABLE IF NOT EXISTS admin_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  key text UNIQUE,
  value jsonb
);

-- =============================================
-- Row Level Security (RLS)
-- =============================================

-- Enable RLS on all tables
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_settings ENABLE ROW LEVEL SECURITY;

-- Contact Submissions: anyone can INSERT, only authenticated users can read/update
CREATE POLICY "Allow public insert" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON contact_submissions
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Analytics Events: anyone can INSERT, only authenticated users can read
CREATE POLICY "Allow public insert" ON analytics_events
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow authenticated read" ON analytics_events
  FOR SELECT USING (auth.role() = 'authenticated');

-- Admin Settings: only authenticated users
CREATE POLICY "Allow authenticated all" ON admin_settings
  FOR ALL USING (auth.role() = 'authenticated');

-- =============================================
-- Indexes for performance
-- =============================================
CREATE INDEX IF NOT EXISTS idx_analytics_event_name ON analytics_events (event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics_events (created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_visitor_id ON analytics_events (visitor_id);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_submissions (created_at);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions (status);
