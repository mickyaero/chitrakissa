# Chitrakissa on WhatsApp — Stage 1 (WhatsApp Business app)

Set up on a separate number (new SIM / eSIM). Then put that number in `relive/site/index.html` → `CONFIG.whatsapp`
(digits with country code, e.g. 919812345678) and run `relive/site/deploy.sh`.

## Business profile  (Settings → Business tools → Business profile)
- **Name:** Chitrakissa
- **Photo:** relive/site/brand/chitrakissa_avatar.jpg (the चि ring)
- **Category:** Arts & entertainment (or Photographer)
- **Description:** Your family, painted into a film — in 3 hours. Send 5 photos, see a preview, pay only if you love it. From ₹299.
- **Hours:** 9:00 am – 9:00 pm, every day
- **Website:** https://mickyaero.github.io/chitrakissa/
- **Instagram:** @chitrakissa

## Greeting message  (Business tools → Greeting message → send to everyone)
> Namaste! 🪔 Welcome to Chitrakissa.
> We paint your family photos into a short film — ready in 3 hours.
>
> To start, send:
> 1. 3–6 photos (one of each person + one all together)
> 2. Everyone's names (Papa, Amma, Aru…)
> 3. Your family name and a line you'd like on the card
>
> Prices: Greeting ₹299 · Story ₹799 · Story + comic ₹1,999
> You see a preview first, then pay. I'll reply within minutes. — Micky

## Away message  (outside 9 am – 9 pm)
> Thanks for your message! 🌙 We're painting again from 9 am. Send your photos now and your film will be the first one we make in the morning.

## Catalog  (Business tools → Catalog) — use the sample posters as images
| Item | Price | Description |
|---|---|---|
| Diwali Greeting | ₹299 | 30-second painted film: a diya for every face, your family name and message. 3–6 photos. Ready in 3 hours. |
| Story film | ₹799 | Up to a minute, built around your story, lines in your language, plus a painted poster. Up to 10 photos. Ready in 3 hours. |
| Story + comic | ₹1,999 | Everything in Story, plus a 3-page painted comic of your story. Ready the same day. |

## Quick replies  (Business tools → Quick replies)
- **/photos** — Lovely! Please also send everyone's names, and the line you'd like on the card. Which language — Hindi, Hinglish or English?
- **/price** — Greeting ₹299 (30 s, diyas for every face) · Story ₹799 (up to a minute, your story in your words + poster) · Story + comic ₹1,999. You pay only after you see the preview.
- **/preview** — Here's your preview 🪔 Tell me if you'd like anything changed (one round of changes is included). If you love it, pay by UPI and I'll send the full-quality film right away.
- **/pay** — Please pay ₹___ by UPI to <your UPI ID>. Once it's in, I'll send the full film + a lighter WhatsApp version.
- **/comic** — For the comic, the pages are drawn with an AI image tool, so your photos will be used there. Is that okay with you? (Films are made on our own computer and never uploaded.)
- **/thanks** — Thank you! 🙏 If they loved it, would you send me a one-line reaction I can share (no names unless you say yes)? And a friend who'd love one gets ₹50 off.

## Labels  (one per chat — this is also the test log)
New · Photos in · Preview sent · Paid · Changes asked · Said no (+ note why)

## Stage 2 (after ~10 orders): WhatsApp Cloud API bot
A number registered on the Cloud API (it can't be the app number at the same time), Meta Business verification, a webhook.
The bot collects photos + names, creates a Studio project, runs it, sends the preview back, and posts a UPI link — the founder
only checks the preview. Build it once real conversations show what customers actually ask.
