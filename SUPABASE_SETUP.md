# Supabase Setup Guide

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up / log in.
2. Click "New Project".
3. Choose a name (e.g., `sanjib-portfolio`).
4. Set a database password (save it somewhere safe).
5. Choose the closest region to your users.
6. Wait for the project to be created.

## 2. Get Your API Keys

1. Go to **Settings → API** in your Supabase dashboard.
2. Copy the **Project URL** (e.g., `https://xxxx.supabase.co`).
3. Copy the **anon (public)** key.
4. **Do NOT use the service_role key in the frontend.**

## 3. Set Environment Variables

Create or update your `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Run the Database Schema

1. Go to **SQL Editor** in your Supabase dashboard.
2. Click "New Query".
3. Paste the contents of `supabase-schema.sql`.
4. Click "Run".
5. Verify the tables were created in **Table Editor**.

## 5. Create an Admin User

1. Go to **Authentication → Users** in your Supabase dashboard.
2. Click "Add User" → "Create User".
3. Enter your admin email and a strong password.
4. Make sure "Auto Confirm User" is checked.
5. Click "Create User".
6. Use this email/password to log in at `/admin`.

## 6. Security Notes

- The **anon key** is safe to use in frontend code — it's designed for client-side use.
- **Row Level Security (RLS)** is enabled on all tables.
- Public visitors can INSERT into `contact_submissions` and `analytics_events` (so the form and tracking work).
- Only authenticated (logged-in) users can READ data (so only admin sees submissions and analytics).
- **Never** put your `service_role` key in frontend code.

## 7. Testing

1. Start the dev server: `npm run dev`
2. Open `http://localhost:3000/admin`
3. Log in with your admin credentials.
4. Submit a test contact form on the homepage.
5. Check that the submission appears in the admin dashboard.
