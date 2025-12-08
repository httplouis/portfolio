# Resend Email Setup Guide

Para paganahin ang contact form, kailangan mo ng Resend API key. Follow these steps:

## Step 1: Get Resend API Key
1. Pumunta sa https://resend.com/
2. Sign in sa iyong Resend account
3. Pumunta sa "API Keys" section
4. Click "Create API Key"
5. Bigyan ng name (e.g., "Portfolio Contact Form")
6. Copy ang **API Key** (ito ay makikita lang once, so save it!)

## Step 2: Verify Domain (Optional pero Recommended)
Para mas professional ang email:
1. Pumunta sa "Domains" section
2. Add your domain
3. Follow the DNS setup instructions
4. Once verified, update the `from` field sa `src/app/api/contact/route.ts`:
   ```typescript
   from: "Portfolio Contact Form <noreply@yourdomain.com>",
   ```

## Step 3: Add Environment Variables

### Para sa Local Development:
1. Gumawa ng `.env.local` file sa root ng project
2. Add these variables:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

3. Replace:
   - `re_your_api_key_here` with your actual Resend API key
   - `your-email@example.com` with the email where you want to receive messages (optional, default is your email from personalInfo)

### Para sa Production/Deployment (REQUIRED!):
**IMPORTANT: Para gumana ang contact form sa deployed site, dapat i-add mo ang environment variables sa Vercel!**

1. Pumunta sa Vercel dashboard: https://vercel.com/dashboard
2. Select your portfolio project
3. Pumunta sa "Settings" > "Environment Variables"
4. Click "Add New"
5. Add these environment variables:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `re_Cm2MKUro_Kx5TpGthhSwh55B4trALtwVB` (your Resend API key)
   - **Environment:** Select "Production", "Preview", and "Development" (or at least "Production")
   - Click "Save"
   
   - **Key:** `CONTACT_EMAIL` (optional)
   - **Value:** `joselouis.rosales.cdscdb@gmail.com` (your email)
   - **Environment:** Select "Production", "Preview", and "Development"
   - Click "Save"

6. **Redeploy your project** para ma-apply ang changes:
   - Pumunta sa "Deployments" tab
   - Click the 3 dots sa latest deployment
   - Click "Redeploy"

## Step 5: Update Sender Email (Optional)
Kung may verified domain ka na:
1. Open `src/app/api/contact/route.ts`
2. Update ang `from` field:
   ```typescript
   from: "Portfolio Contact Form <noreply@yourdomain.com>",
   ```

## Testing
After setup, test the contact form. Dapat makareceive ka ng email sa email address na naka-set sa `CONTACT_EMAIL` o sa default email mo.

## Notes
- Resend free tier: 3,000 emails/month
- Default sender: `onboarding@resend.dev` (for testing)
- Para sa production, dapat may verified domain ka

