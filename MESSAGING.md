# Chitrakissa — talking to customers (Instagram DM first, Telegram second, no phone number shown)

The site's buttons open an Instagram DM (`ig.me/m/chitrakissa`); Telegram (`t.me/chitrakissa`) is offered for full-quality photos.
The founder's phone number and WhatsApp are never shown.

## Instagram (professional account — all free)
- **Saved replies** (Settings → Creator tools → Saved replies) — type the shortcut in a DM:
  - **/hi** — Namaste! 🪔 Welcome to Chitrakissa. Send 3–6 photos (one of each person + one all together), everyone's names, and the line you'd like on the card. Prices: Greeting ₹299 · Story ₹799 · Story + comic ₹1,999. You see a preview within 3 hours, then pay. — Micky
  - **/photos** — Lovely! Please also send everyone's names, and the line for the card. Which language — Hindi, Hinglish or English? (For the sharpest result you can also send the photos on Telegram @chitrakissa using "Send as file".)
  - **/preview** — Here's your preview 🪔 Tell me if you'd like anything changed (one round included). If you love it, pay by UPI and I'll send the full-HD film by a private link.
  - **/pay** — Please pay ₹___ by UPI to ___. Once it's in, the full-HD film comes by a private download link (deleted after 30 days).
  - **/comic** — The comic pages are drawn with an AI image tool, so your photos would be used there. Is that okay with you? (Films are made on our own computer and never uploaded.)
  - **/thanks** — Thank you! 🙏 If they loved it, would you send a one-line reaction I can share (no names unless you say yes)?
- **FAQs / ice-breakers** (Settings → Creator tools → Frequently asked questions) — the buttons people see before their first DM:
  "How much is it?" · "What photos do I send?" · "How fast is it?" · "Can it be in Hindi?"
- **Labels in the inbox** (Primary/General + flag): use Primary = active orders, flag = waiting for payment.

## Telegram (for full-quality photos and HD delivery)
1. Create an account with username **@chitrakissa** (free right now), display name "Chitrakissa", photo = brand/chitrakissa_avatar.jpg.
2. **Privacy:** Settings → Privacy and Security → Phone Number → **Who can see my phone number: Nobody**, and **Who can find me by my number: My contacts**. Customers then only ever see @chitrakissa.
3. Bio: "Your family, painted into a film in 3 hours · from ₹299 · mickyaero.github.io/chitrakissa"
4. Customers send photos with **"Send as file"** (keeps full quality). Deliver the final film the same way (Telegram files keep full HD, up to 2 GB).
5. Later (free): a Telegram **bot** (@BotFather) can collect photos + names and drop them straight into the Studio — build after ~10 orders.

## Delivering the HD film
- Preview: in the chat (Instagram compresses video — fine for a preview).
- Final: a private Google Drive link (folder per order, "anyone with the link can view", delete after 30 days) or a Telegram file.

## Payments (decide later)
A personal UPI ID shows your bank-registered name to the payer. For privacy, use a business UPI / payment link (Razorpay
Payment Links, PhonePe Business, Paytm for Business) so customers see "Chitrakissa". When ready, put it in
`relive/site/index.html` → `CONFIG.upi` and run `relive/site/deploy.sh` — the UPI box appears on the page by itself.

## Log every conversation (the point of the test)
| name | came from | replied? | price shown | said yes? | paid? | hours I spent | their reaction (exact words) |
|---|---|---|---|---|---|---|---|
