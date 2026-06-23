# Epeno Consulting Website

## Lead admin setup

All public enquiry forms save into one MongoDB-backed lead list. Repeated
submissions with the same phone number update the existing lead instead of
creating duplicates.

1. Copy `.env.example` to `.env.local`.
2. Add the MongoDB connection string and secure admin credentials.
3. Start the app and open `/admin`.

The admin dashboard is intentionally not linked in the public navigation. It
supports search, phone-number copy, click-to-call, lead source tracking and
submission counts.
