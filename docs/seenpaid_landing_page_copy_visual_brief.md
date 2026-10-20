# Seenpaid Landing Page
## Conversion Copy + High-Delight Visual Design Brief

**Purpose:** A single handoff document for the designer, copywriter, and builder. It contains the recommended landing-page copy, the visual system, detailed section-by-section art direction, motion behavior, asset-search vocabulary, and launch guardrails.

**Creative north star:** Make a visitor feel that Seenpaid is a thoughtful, capable product built by people who understand the daily grind of publishing and the frustration of not knowing what actually drives revenue. The website should feel clear, distinctive, tactile, and quietly impressive, not like another interchangeable AI SaaS template.

**Important:** Any dashboard numbers used in the visual concept are illustrative mock data, not customer results. Confirm integration availability, plan limits, pricing, and trial terms against the production product before launch.

---

# Part I: Positioning and experience principles

## The central promise

**Publish without the busywork. Know what brings in sales.**

Seenpaid helps creators, founders, and teams manage social publishing across connected channels, automate repetitive publishing tasks through compatible AI agents, and connect tracked clicks to matched payments.

The page must sell the change in the customer's working life, not just list a feature set:

- **Before:** too many tabs, repetitive manual publishing, inconsistent distribution, scattered performance data, and uncertainty about which posts lead to business results.
- **After:** one clearer publishing workflow, less repetitive work, better visibility into post status, and a more evidence-based view of which posts and platforms are associated with attributable revenue.

Do not promise guaranteed revenue growth. Seenpaid can make publishing and attribution easier to manage; it cannot guarantee that a user's content will sell.

## The primary audience

1. **Solo founders and creators** who publish to grow a business and need to understand whether content brings in leads or purchases.
2. **Social media managers and small agencies** who coordinate multiple brands and channels, and want less administrative work.
3. **AI-native operators and technical creators** who already use AI tools and want an agent to do more than draft captions.

Prioritize the first audience in the hero. The visual should still make sense to the other two.

## The visitor's intended emotional journey

1. **Recognition:** “This understands the annoying parts of my workflow.”
2. **Relief:** “I can see how this reduces my weekly busywork.”
3. **Curiosity:** “Wait, it can connect a post to tracked sales?”
4. **Trust:** “The product is clear about what it measures and what it doesn't.”
5. **Desire:** “I can picture using this every week.”
6. **Action:** “Trying it is a reasonable next step.”

Every major section should advance one of those feelings. Do not make every section shout for attention. Give the visitor visual rest as well as moments of delight.

## Core design principle

**Show one content item travelling through the complete workflow: create → distribute → track → learn.**

Publishing is the mechanism. Commercial clarity is the payoff. The site should make that relationship understandable before visitors read every word.

---

# Part II: Visual design brief

## 1. Art direction: editorial SaaS meets revenue intelligence

Build a distinctive interface-led experience combining:

- **Editorial confidence:** strong typography, decisive hierarchy, short readable text, generous breathing room, asymmetrical but disciplined composition.
- **Product realism:** believable interface details, real status states, clear data hierarchy, useful labels, controlled card layering.
- **Data clarity:** restrained charts, precise connections, explicit metric labels, and an obvious relationship between a post and its attributable outcome.
- **Human warmth:** soft neutral surfaces, small moments of color, carefully selected visual details, and interaction that feels responsive instead of clinical.
- **Craft and delight:** polished transitions, thoughtful hover states, subtle depth, consistent alignment, and a few memorable moments rather than constant animation.

The result should look like a serious product with a point of view, not a template wearing a different logo.

### Desired visitor reaction

The visitor should feel pleased that they landed on the page because it is immediately understandable, visually considered, and satisfying to explore. Aim for **clarity first, delight second, decoration last**.

## 2. The hero concept: “From post to payment”

### Overall composition

Use a desktop two-column hero, approximately **42% copy / 58% visual**. Keep the headline and CTA comfortably readable at common laptop widths. The visual must feel like a custom-built product scene, not a screenshot pasted into a browser frame.

**Left side:**
- Small eyebrow: “SOCIAL PUBLISHING × REVENUE ATTRIBUTION”
- Large outcome-focused headline.
- One concise paragraph explaining how the product works.
- Primary trial CTA and quieter secondary demo CTA.
- Trial terms in small, legible text.

**Right side:**
Build a layered product composition around three related elements:

1. **Publishing calendar:** a compact, realistic schedule showing one post queued for multiple connected channels.
2. **Revenue attribution panel:** the visual focal point, showing tracked clicks, matched sales, and attributable revenue associated with that post. Mark figures as illustrative in the design file and ensure the page does not imply they are average customer results.
3. **AI-agent command card:** a smaller supporting element showing a natural-language instruction such as “Schedule this post across connected channels,” followed by a clear completion state.

The three pieces should visually form a single story, not three unrelated cards. A fine line, a subtle path, or a sequence of connected states should lead the eye from the post to the published states to the attributed result.

### Visual hierarchy

1. Attributable revenue / matched sales panel.
2. The content item that produced the result.
3. Multi-channel publishing calendar.
4. AI-agent command and automation status.

The AI card is a differentiator, but it should not take over the hero. A visitor should understand the commercial benefit even if they have never heard of MCP or AI agents.

### Hero headline and supporting copy

**Eyebrow:** SOCIAL PUBLISHING × REVENUE ATTRIBUTION

# Publish without the busywork. Know what brings in sales.

Schedule content across your connected social channels, let your AI agent handle repetitive publishing, and trace tracked clicks to actual payments.

**Primary CTA:** Start your 7-day trial →

**Secondary CTA:** See how it works ↓

*7-day trial · Card required · $0 due today · Cancel before day 8 and pay nothing.*

### Animation storyboard

Create one coherent sequence lasting around 4–6 seconds, with the option to pause or replay. It should communicate the product workflow without becoming an animated screensaver.

1. A social post card appears in a composer.
2. The card moves into the calendar and branches toward connected channel labels.
3. Publication status indicators resolve to “Published” where applicable.
4. A tracked click appears on the post's path.
5. A payment event arrives and is matched to the tracked click.
6. The attribution panel resolves into focus, highlighting matched sales and attributable revenue.

The motion should clarify cause and effect. It must not imply every click becomes a sale or that all payments can always be attributed.

**Motion rules:**
- Use short, calm transitions with deliberate easing.
- Animate position and opacity more than large scale changes.
- Keep text legible during motion.
- Avoid perpetual looping. After the sequence, leave the final composed state visible.
- Respect `prefers-reduced-motion`; provide a static final state.
- Do not use sound or autoplay video with sound.
- The page must still make sense if animation is disabled or fails to load.

### Hero layout rules

- Keep the visual within a clear bounding area; no elements should drift into the headline or CTA.
- Use layered depth sparingly: one primary panel, one secondary panel, one supporting card.
- Add slight rotation only if it improves depth and does not reduce legibility. Default to near-straight interface planes.
- Avoid too many floating platform logos. Use compact, accurate labels or small marks only where they communicate a specific part of the workflow.
- If a real Seenpaid product screen exists, use it as the foundation. Create custom supporting UI only where necessary to explain the full journey.
- On mobile, simplify the scene into one legible product panel and a compact workflow cue. Do not squeeze the desktop composition until every label becomes microscopic.

## 3. Design system direction

### Color

Start with a **mostly neutral canvas**: white or warm off-white surfaces, near-black text, pale gray borders, and one distinctive Seenpaid brand accent. Use green only for verified positive states, such as a matched transaction or a successfully completed job.

Suggested roles, not final brand tokens:
- **Canvas:** warm white / soft neutral.
- **Primary text:** ink / near-black.
- **Secondary text:** muted graphite with sufficient contrast.
- **UI borders:** light neutral gray.
- **Accent:** one confident blue, indigo, or brand-specific hue for active controls and key links.
- **Positive state:** subdued green, reserved for success and matched revenue.
- **Warning state:** restrained amber, used only for attention-needed states.
- **Error state:** clear red used sparingly and always paired with text or an icon.

Do not paint every card a different pastel color. The interface should feel cohesive, not like a box of candy.

### Typography

- Use a contemporary sans-serif with a distinctive but highly legible display weight.
- Hero type should be bold and compact enough to create energy without becoming a wall of text.
- Body copy should be generous and calm, with comfortable line length.
- Use small uppercase labels sparingly for eyebrow text and metadata.
- Make numerical metrics visually clear, but never larger than the main message without a reason.
- Use tabular numerals in data cards where possible.

### Grid and spacing

- Use a consistent 12-column desktop grid with a clear max-width container.
- Favor generous vertical spacing between sections. The page should feel paced, not crammed.
- Align key text, UI frames, dividers, and section anchors deliberately.
- Alternate dense product demonstrations with quiet editorial sections.
- Avoid a repeating stack of identical rounded cards. Use full-width compositions, annotated UI, open text blocks, and negative space to create rhythm.

### UI treatment

- Crisp 1 px borders, subtle shadows, restrained corner radii, and consistent spacing.
- Use real interface states such as “Scheduled,” “Published,” “Needs reconnection,” “Tracked click,” “Matched payment,” and “Unmatched payment.”
- Keep charts simple. Prefer a clear connection between an individual post and a result over a generic rising line chart.
- Every data figure needs a label and a believable context.
- Use empty states and failure states only if the section is demonstrating reliability; do not clutter the hero with error messages.

### Illustration and imagery

**Default to product visuals rather than stock photography.** Seenpaid's value is operational and measurable. Product UI can show that more precisely than a smiling founder looking at a laptop.

If the design needs human context lower on the page, use carefully art-directed, documentary-style details of a real work setup, cropped hands, notebooks, or behind-the-scenes creator workflows. Do not use generic stock-photo montages in the hero.

Avoid:
- AI robot heads, glowing brains, magic wands, and generic “AI” sparkles.
- Floating 3D blobs that do not explain the product.
- Fake notification bubbles shouting about huge earnings.
- Unverified customer logos, fabricated testimonials, and fictional metrics presented as fact.
- Giant clouds of social platform logos.
- Decorative charts that imply a guaranteed increase in sales.

## 4. Interaction and micro-delight

Small moments of responsiveness can make the site feel loved and carefully made. Use them with restraint.

### Recommended details

- **CTA hover:** a subtle shift in contrast, a small arrow movement, and a clear focus ring for keyboard users.
- **Calendar interactions:** on hover, a scheduled post can reveal its caption preview and channel status without jumping the layout.
- **Workflow connectors:** as the visitor scrolls into the product story, a line can draw from the post card toward the attribution panel.
- **Matched payment state:** a small confirmation marker appears beside the matched event. The animation should be subtle and must not imply causal certainty beyond the actual attribution logic.
- **Tabs or filters:** clear active states, instant feedback, no gratuitous page reloads.
- **Copyable code or setup commands:** visible copy confirmation if MCP configuration is demonstrated.
- **FAQ interactions:** smooth expand/collapse, stable layout, readable open states, and accessible keyboard behavior.
- **Section transitions:** use whitespace, changes in surface tone, and composition changes rather than a stack of decorative dividers.

### Interaction quality bar

Every interactive element must give understandable feedback. Avoid hover-only information that is unavailable on touch. Avoid scroll hijacking, forced carousels, artificial loading delays, and motion that blocks reading.

## 5. Visual rhythm for the entire page

The page should not look like the same component repeated fifteen times. Give each section a distinct visual job while maintaining one design language.

### Section 1: Hero
**Visual job:** deliver the complete promise in one glance.

Show the calendar, a post, and the revenue attribution panel as one connected story. Use the strongest contrast and most custom visual here.

### Section 2: The transformation
**Visual job:** let visitors recognize their current frustration and picture the improved working day.

Use a before/after comparison, but do not create two giant marketing cards. Make “before” feel fragmented through disconnected mini-windows, repeated copy/paste actions, and scattered metrics. Make “after” feel calm and organized through one system and one clear signal. Keep this respectful; do not make the user's current workflow look foolish.

### Section 3: Product workflow
**Visual job:** show the actual product system.

Use a large calendar or post-management interface with annotations that point to useful actions: schedule, platform-specific caption, status, and tracked result. Keep labels short and attach them to the relevant interface detail.

### Section 4: How it works
**Visual job:** reduce perceived effort.

Use three steps with a visual progression. Each step gets one custom visual: connect accounts, schedule content, review attributable results. This should feel like a simple path, not a generic three-icon feature row.

### Section 5: Revenue attribution
**Visual job:** make Seenpaid's differentiator unmistakable.

Give this section more breathing room and a larger visual. Feature an individual post, its tracked click, the matched payment, and the resulting attribution record. Explicitly distinguish matched from unmatched payments. Do not use a generic analytics dashboard as the whole story.

### Section 6: AI-agent integration
**Visual job:** make the advanced feature approachable.

Show a realistic agent command beside the corresponding Seenpaid action. Use one short request, a visible tool/action state, and a result. Include a small MCP label or explanation for technical visitors, but do not require visitors to understand MCP to see the benefit.

### Section 7: Reliability
**Visual job:** lower anxiety.

Use a status timeline with independent publishing jobs: one succeeds, one needs reconnection, and another continues unaffected. The design should reassure visitors that errors are visible and manageable, not promise flawless publishing.

### Section 8: Reuse and insights
**Visual job:** show a repeatable working habit.

Feature a past post resurfacing with its historical performance context. Present recommendations as prompts for better decisions, not as magic or guaranteed growth.

### Section 9: Platform coverage
**Visual job:** answer compatibility questions quickly.

Use a compact, grouped grid with an explicit status system: available, limited workflow, and coming soon. Do not make unavailable platforms look live. Add caveats directly beside the relevant group rather than burying them at the bottom of the page.

### Section 10: Pricing
**Visual job:** make the choice feel easy and fair.

Use three simple tiers with a shared “included with every plan” feature area. Visually distinguish plan limits rather than implying that expensive plans unlock better core tools if the feature set is the same. Ensure the billing unit is consistent everywhere.

### Section 11: FAQ
**Visual job:** remove doubt before purchase.

Keep the accordions calm and readable. Prioritize trial, attribution, platform availability, AI compatibility, account security, and billing-unit questions.

### Section 12: Free resources
**Visual job:** provide value even to visitors who are not ready to buy.

Show the growth playbook as an editorial resource, with a concise chapter list and useful tool links. Treat it like a real resource library, not an unrelated SEO block.

### Section 13: Final CTA
**Visual job:** bring the story full circle.

Reuse a simplified version of the post-to-payment graphic. The final CTA should feel like a calm next step after the visitor understands the product, not an urgent sales ambush.

## 6. Responsive and accessible behavior

- Design mobile as a first-class composition, not a compressed desktop screenshot.
- Keep the hero CTA visible without requiring an awkward scroll past an oversized visual.
- Use buttons and links with practical touch target sizes.
- Maintain sufficient text contrast, visible keyboard focus, semantic headings, and meaningful alt text.
- Do not rely on color alone for success, warning, and error states.
- Respect reduced-motion settings and keep a static alternative for any animation.
- Avoid horizontal overflow in dashboards and pricing tables.
- Keep body text readable and avoid turning essential labels into tiny UI decoration.
- Optimize images and animation assets; the site should feel fast as well as polished.

## 7. Asset-search vocabulary

Use these queries to find references, not assets to paste in blindly. The final design should be built around Seenpaid's real UI and a custom composition.

- `social media revenue attribution dashboard UI`
- `post-level conversion attribution interface`
- `multi-channel publishing calendar SaaS`
- `editorial minimalist SaaS landing page`
- `layered dashboard product hero composition`
- `content to revenue flow visualization`
- `minimal data visualization conversion journey`
- `AI agent command interface product UI`
- `SaaS interface status timeline UI`
- `subtle product UI microinteraction prototype`
- `Swiss editorial typography web design`
- `minimal product-led SaaS website art direction`

Useful reference places: Dribbble and Behance for art direction, Mobbin and Figma Community for interface patterns, and the live product itself for authenticity. Use image search to understand the vocabulary; do not let a reference board dictate a generic template.

## 8. Production deliverables for the designer

1. Desktop hero design at a common laptop and desktop width.
2. Mobile hero design with simplified product visualization.
3. Design system tokens for color, type, spacing, borders, radii, shadows, and motion.
4. The post-to-payment hero composition as editable Figma components.
5. A static hero state and a motion prototype.
6. Section visuals for transformation, attribution, AI-agent workflow, reliability, and pricing.
7. A responsive behavior note for each major composition.
8. An asset and claim checklist identifying which values are sample data and which UI states are real.

## 9. Design acceptance criteria

The hero is successful if, within five seconds, a visitor can tell:

1. Seenpaid helps them publish across connected social channels.
2. It reduces repetitive publishing work.
3. It can connect tracked clicks to matched payments.
4. It shows an understandable business outcome rather than promising guaranteed success.

The full page is successful if it feels:

- **Clear:** visitors understand the product and trial terms.
- **Specific:** the interface demonstrates Seenpaid, not generic social media software.
- **Trustworthy:** metrics, integration statuses, and caveats are accurate.
- **Pleasant:** typography, spacing, interaction, pacing, and product visuals feel intentional.
- **Memorable:** the post-to-payment story is a recognizable visual idea.
- **Fast and accessible:** the experience remains useful without animation and across screen sizes.

---

# Part III: Landing page copy

The copy below is the recommended first draft. Retain the section order unless product evidence suggests a better one. The visual design brief above explains how each section should be expressed on screen.

---

## 01. Navigation

**Seenpaid**

Product · Platforms · Pricing · Resources

**CTA: Start your 7-day trial**

---

## 02. Hero

**Eyebrow:** SOCIAL PUBLISHING × REVENUE ATTRIBUTION

# Stop guessing which posts make you money.

Publish across your social channels from one calendar. Let your AI agent handle the busywork. Then connect tracked clicks to real payments to see which posts actually bring in revenue.

Less time copying and pasting. More consistent publishing. A clearer picture of what turns attention into sales.

**Primary CTA:** Start your 7-day trial →

**Secondary CTA:** See how it works

*7 days free · Card required · $0 due today · Cancel before day 8 and pay nothing.*

**Supporting line:** Works with Claude, ChatGPT, Cursor, Copilot and other compatible AI clients.

---

## 03. The transformation

### Your content shouldn't be this hard to manage. Or this difficult to measure.

You're already creating content. The problem is everything that comes after: adapting it for different platforms, scheduling it, checking whether it went live, and trying to work out whether any of it made you money.

Seenpaid brings publishing, automation and revenue attribution into one workflow.

**Before Seenpaid**

- You're copying captions between platforms instead of creating your next good post.
- Your publishing schedule depends on how much time you have that day.
- You see likes and engagement, but struggle to connect them to actual purchases.
- Your best-performing content gets buried while you start from scratch again.
- One failed publication or expired connection creates another task to investigate.

**After Seenpaid**

- Write once and adapt the caption for each platform when needed.
- Schedule your content from one calendar and let publishing run automatically.
- See tracked clicks, matched sales and revenue alongside your content.
- Revisit posts that have already brought in revenue instead of always starting from zero.
- Know when an account needs attention while other publishing jobs continue.

**The outcome:** A repeatable content workflow that takes less manual effort and gives you better information about what deserves your next hour of work.

---

## 04. Product workflow

### One place to publish. One place to understand what paid off.

Seenpaid connects the work of distributing content with the work of understanding its business results. You don't need separate workflows for every social channel or a spreadsheet to piece together your sales data.

**Plan your week. Publish across your channels. Learn from the results.**

Your calendar shows scheduled and published posts across connected networks. Your results view brings tracked clicks, matched sales and revenue together at the post and platform level.

*Supporting UI caption: Every network. One calendar. No guessing what went live.*

---

## 05. How it works

### Three steps to a more useful social media workflow.

#### 01. Connect your channels

Bring your social profiles into Seenpaid. Connect through the platform's sign-in flow where supported, or supply your own API key for networks that require it.

If a connection expires, Seenpaid flags the affected account rather than allowing that issue to block every other publishing job.

#### 02. Create once. Schedule everywhere.

Write your post once, then schedule it across your connected platforms from one calendar. Seenpaid enforces each platform's character limits, with the option to customize individual captions.

Planning a launch or a month of content? Use bulk CSV scheduling to queue multiple posts in one upload.

#### 03. Find out what brought in revenue

Switch on optional revenue attribution and connect your supported payment platform. Seenpaid uses tracked links and click data to match eligible payments to the specific tracked click that led to them.

See which posts generated attributable sales, which platforms brought in revenue, and which content is worth revisiting.

**CTA: Start publishing with Seenpaid →**

---

## 06. Revenue attribution

**Eyebrow:** FROM ENGAGEMENT TO BUSINESS RESULTS

# Likes are nice. Knowing what sold is better.

A post can collect hundreds of likes and generate no sales. Another can quietly bring in your next customer.

Without connecting content to revenue, it's difficult to know which one deserves more of your attention.

Seenpaid lets you measure the business results behind your social content, not just the activity around it.

Connect a supported payment platform, switch on attribution, and see the relationship between tracked clicks and actual payments.

**Know what to measure:**

- **Clicks per post:** See how much tracked traffic your content generates.
- **Matched sales:** Count the purchases that can be tied to a specific tracked click.
- **Revenue per post:** Identify the content associated with attributable revenue.
- **Revenue by platform:** Compare the sales value of your social channels.
- **Engagement alongside revenue:** Review the likes, comments and shares that each platform makes available.

**Works with:** Stripe, Gumroad, Lemon Squeezy, Shopify, Paddle, Polar, Dodo Payments and Whop.

*Revenue attribution is optional and off by default. Results depend on tracked links, the required tracking setup and available data. Unmatched payments are not presented as confirmed sales from a post.*

**CTA: See what your content earns →**

---

## 07. AI agent integration

**Eyebrow:** BUILT FOR THE WAY YOU WORK NOW

# Your AI agent can do more than write your posts.

You've already got AI helping with ideas, research and writing. Seenpaid gives compatible AI clients a way to take those ideas all the way to scheduled and published content.

Connect Seenpaid through MCP and let your agent use its 50 tools to schedule posts, check platform limits, review publication status, identify failures and read available revenue data.

Use Claude, Claude Code, ChatGPT, Cursor, Copilot or another compatible MCP client.

**Ask your agent to:**

- Schedule a LinkedIn post for tomorrow morning.
- Check which social accounts are connected.
- Find the next available publishing slot.
- Show which posts generated attributable revenue.
- Check what published successfully and what needs attention.

Spend less time operating a publishing tool. Spend more time deciding what your business should communicate next.

**CTA: Set up Seenpaid for your agent →**

*Your accounts and connected services still need to be configured before your agent can act on them.*

---

## 08. Reliable publishing

**Eyebrow:** FEWER THINGS TO BABYSIT

# One failed post shouldn't derail your entire schedule.

Publishing across several networks creates several opportunities for something to go wrong. An expired token, a platform error or a failed post shouldn't force you to restart the whole process.

Seenpaid handles each post on each platform as a separate publishing job. Failed jobs retry, while an issue on one network does not automatically block the others.

You can check what's scheduled, what's published, what failed and which account needs reconnecting.

**What this changes for your workflow:**

- Fewer manual publishing steps.
- Better visibility into publishing failures.
- Less disruption when an individual account needs attention.
- More consistency across the channels you manage.

*Platform availability, account permissions and API behaviour can affect whether a specific post can be published automatically.*

---

## 09. Repeat what works

**Eyebrow:** MAKE YOUR EXISTING CONTENT WORK HARDER

# Stop reinventing your content calendar every week.

Not every post deserves to be repeated. But when a post has already generated revenue, you've got a reason to pay attention.

Seenpaid helps you review performance, explore forecasting and recommendations, and bring previously successful posts back into your publishing workflow.

Use Autopilot and Recycle to resurface posts that have already earned. Export your data when you need a deeper analysis or want to build your own reporting workflow.

The goal isn't to publish more just for the sake of it. It's to spend more of your publishing effort on content that has demonstrated value.

**CTA: Build a more repeatable content workflow →**

---

## 10. Platforms

**Eyebrow:** YOUR SOCIAL CHANNELS, ONE WORKSPACE

# Show up across your channels without multiplying your workload.

Manage the social platforms and publishing destinations you use from a single workflow. Every plan includes the same core feature set; your workspace allowance determines which plan fits your setup.

**Available integrations**

X · TikTok · LinkedIn · Threads · Bluesky · Mastodon · Telegram · Discord · Slack · Tumblr · Medium · WordPress · Ghost · DEV.to · Hashnode · Lemmy · Nostr · Webhook

**Coming soon**

Instagram · Facebook · Pinterest

*Instagram, Facebook and Pinterest are awaiting platform approvals. TikTok videos are sent to your drafts for a final tap in the TikTok app. X publishing requires your own X API key, which may incur additional charges from X.*

No premium tier required just to access the core publishing and reporting features. Choose your plan based on the number of workspaces you manage.

---

## 11. Pricing

**Eyebrow:** STRAIGHTFORWARD PRICING

# Pay for the number of brands you manage. Get the same core toolkit.

Whether you're building your personal brand or managing content for clients, you shouldn't need to upgrade just to unlock the features that help you do your job.

Every plan includes the core Seenpaid features. Choose the workspace allowance that fits your work.

### Solo

**For creators, founders and individuals managing their own channels.**

**$19.99 / month**

- 5 workspaces
- Scheduling and publishing calendar
- Available platform integrations
- AI agent access
- Optional revenue attribution
- Revenue analytics and content insights

**CTA: Start your 7-day trial →**

* $0 due today · Cancel before day 8 and pay nothing.*

### Multi-Brand

**For social media managers and small agencies running multiple brands.**

**$39.99 / month**

- 15 workspaces
- Every core feature included
- One publishing workflow for the brands you manage
- AI agent access and revenue reporting
- CSV export and content recycling

**CTA: Start your 7-day trial →**

* $0 due today · Cancel before day 8 and pay nothing.*

### Omni

**For larger teams and operators managing an extensive portfolio.**

**$69.99 / month**

- Unlimited workspaces
- Every core feature included
- Manage every brand within one system
- AI agent access and optional revenue attribution
- Reporting, export and content recycling

**CTA: Start your 7-day trial →**

* $0 due today · Cancel before day 8 and pay nothing.*

### Included with every plan

- **One publishing calendar:** Schedule, edit, cancel and review posts.
- **Available social integrations:** Use the same core feature set on every plan.
- **AI agent access:** 50 MCP tools for compatible AI clients.
- **Optional revenue attribution:** Connect supported payment providers and match tracked clicks to payments.
- **Revenue analytics:** Review clicks, matched sales and revenue by post and platform.
- **Performance insights:** Explore forecasts and ideas for what to publish next.
- **Autopilot and Recycle:** Bring previously successful posts back into your workflow.
- **CSV export:** Take your data into your own reporting setup.
- **Tracked bio-link page:** Give people a trackable destination on platforms that don't support links in captions.
- **Direct support:** Get help from the person who built Seenpaid.

*No permanent free plan. Every paid plan includes a 7-day trial, with a card required at signup. Cancel before day 8 to avoid a charge.*

**Secondary link:** Compare yearly pricing and read the pricing FAQ →

---

## 12. FAQ

# The important questions, answered plainly.

### Do I need a credit card to start the trial?

Yes. A payment card is required at signup. Every plan comes with a 7-day trial, and nothing is charged until day 8. Cancel before the trial ends and you pay nothing.

### Do I have to use revenue tracking?

No. Seenpaid works as a social media scheduler without revenue attribution. Tracking starts off by default, and you can enable or disable it in Settings.

### How does revenue attribution work?

Connect a supported payment provider and set up tracked links. Seenpaid uses click identifiers, along with your site's tracking pixel or a tracked redirect, to associate a payment with the specific click that led to it.

A payment is either matched to an exact tracked click or left unmatched. Seenpaid does not fill in the gaps with estimated sales.

### Which payment platforms are supported?

Stripe, Gumroad, Lemon Squeezy, Shopify, Paddle, Polar, Dodo Payments and Whop. Stripe supports a one-click connection or a read-only restricted key.

### Which engagement metrics can I see?

Seenpaid displays the likes, comments, shares and views that supported platforms report through their APIs and the access you've granted. Availability varies by network. Where a platform does not provide a metric, Seenpaid shows no value rather than reporting a misleading zero.

### Which social platforms are available?

The currently listed integrations include X, TikTok, LinkedIn, Threads, Bluesky, Mastodon, Telegram, Discord, Slack, Tumblr, Medium, WordPress, Ghost, DEV.to, Hashnode, Lemmy, Nostr and Webhook.

Instagram, Facebook and Pinterest are coming soon, subject to platform approvals. TikTok videos require a final publishing action in TikTok, and X publishing uses your own API key.

### Does Seenpaid work with my AI agent?

Yes. Seenpaid exposes 50 tools through MCP. Compatible clients, including Claude, Claude Code, ChatGPT, Cursor and Copilot, can schedule content, check platform constraints, inspect publishing status and access available revenue information.

### Can I customize captions for different platforms?

Yes. Start with one caption, then override it for individual platforms when needed. Seenpaid checks the applicable character limits before you schedule.

### What happens when a post fails?

Each post and platform is handled as a separate job. Failed jobs can retry, and an issue with one network does not automatically stop publishing on another. If an account connection expires, Seenpaid flags the affected account so you can reconnect it.

### Will using a scheduler reduce my reach?

No one can reliably promise that a scheduler will increase or preserve your reach in every situation. Seenpaid publishes through supported platform APIs, using your account and the caption you've written. The platforms decide what they distribute.

With revenue attribution disabled, your links are sent without tracking identifiers. When attribution is enabled, tracked links carry the identifiers needed to connect clicks with eligible payments.

### Does Seenpaid store my social media passwords?

Your Seenpaid password is stored as a hash. Most social networks use their own sign-in flows and provide Seenpaid with a token, which is stored encrypted. Bluesky uses an app password, while X and certain other integrations require keys that you provide. Those credentials are stored encrypted and can be revoked through the relevant service.

### What's the difference between a workspace and a connected account?

A workspace represents a brand or project you manage. A connected account is an individual social profile, such as an X account or LinkedIn page.

**Editorial note before publishing:** Keep this distinction only after confirming the actual limits for workspaces and connected accounts on each plan. The current landing page describes the plan limits inconsistently.

### Can I switch plans or cancel?

Yes. Manage your plan from Settings → Billing without arranging a call or sending an email. Your connected accounts and scheduled posts carry over when you switch plans. One free trial is available per customer.

### What doesn't Seenpaid do?

Seenpaid focuses on scheduling, publishing and understanding content performance. It does not include a social inbox, follower analytics or a media editor. It reports the engagement metrics available from supported platforms and offers optional attribution for tracking sales.

### Is there a free plan?

No permanent free plan is offered. Every paid plan includes a 7-day trial, with a card required at signup.

---

## 13. Free resource

**Eyebrow:** NOT READY TO COMMIT?

# Better social media starts with a better system.

Learn how to build a consistent publishing habit, find content formats worth repeating, distribute posts without burning out, and connect social attention to business results.

Our free social media growth playbook walks you through the process in six practical chapters. Each chapter lists its sources, and you can read the whole thing without signing up or handing over your email.

**CTA: Read the free growth playbook →**

**Explore the chapters**

1. Start here: Your 30-day plan
2. Set up your accounts properly
3. Find formats that work
4. Post everywhere without burning out
5. Turn attention into sales
6. Let an AI agent do the busywork

**More free tools:** Social Media Post Preview · Cross-Post Checker · Social Posting API Checker · Social Media Image Sizes

**CTA: Explore all free tools →**

---

## 14. Final CTA

# Your next post shouldn't take five separate publishing workflows.

Plan it once. Schedule it across your connected channels. Let your AI agent handle the repetitive steps. And when you want to know what paid off, connect tracked clicks to actual sales.

Start with the 7-day trial and build a publishing system around the results that matter to your business.

**Primary CTA: Start your 7-day trial →**

*Card required · $0 due today · Cancel before day 8 and pay nothing.*

**Secondary CTA: Explore the open-source posting layer ↗**

---

## 15. Footer

**Seenpaid**

A social media publishing system for creators, founders and teams who want to spend less time distributing content and get a clearer view of what generates revenue.

**Product**

Features · Pricing · Tools · Channels · Who it fits · AI agents · MCP server · Documentation · Blog · Social media growth playbook

**Compare**

Seenpaid vs Post Bridge · Seenpaid vs Buffer · Seenpaid vs Hootsuite · Seenpaid vs Postiz · Social media MCP servers · Best for solo founders

**Company**

About · Contact · Terms · Privacy · Log in · Start your trial

**Closing line:** Post everywhere. See what paid.

© 2026 Seenpaid. All rights reserved.

Built by Justinas.

---

# Part IV: Metrics, proof, and launch checklist

## Metrics worth featuring in the product story

These are metrics Seenpaid can help users monitor, depending on integration support and tracking setup. Do not present them as guaranteed improvements.

| Desired outcome | Metric to measure | What it tells the visitor |
|---|---|---|
| Less time spent on repetitive publishing | Minutes spent publishing per week | Whether the workflow saves operating time |
| More consistent distribution | Posts published vs. planned | Whether scheduled content is going live consistently |
| Less operational friction | Failed posts, retries, reconnections | Where attention is still required |
| Better content-performance visibility | Tracked clicks per post and platform | Which content attracts tracked traffic |
| Better commercial insight | Matched sales and attributable revenue per post | Which tracked clicks are associated with completed purchases |
| More informed content decisions | Performance of recycled posts over time | Whether reusing prior content appears worthwhile |

## Claims to validate before release

- Confirm which social integrations are live, limited, or pending approval.
- Verify which metrics are provided by each network and what permissions they require.
- Confirm how tracked links, cookies or identifiers, pixels, redirects, and payment webhooks operate in the actual product.
- Confirm whether attribution is exact, last-click, or another defined model; use the technically correct term in the page and FAQ.
- Verify all pricing, trial length, card requirement, cancellation cutoff, plan limits, and billing units.
- Resolve any inconsistency between the number of workspaces, brands, social profiles, and connected accounts included in each tier.
- Confirm that the stated MCP tool count and supported AI clients are current.
- Check every security statement with the implementation owner. Do not claim encryption, password hashing, or data handling behavior unless verified.
- Label sample figures in the design file and never frame them as customer results.
- Do not add made-up testimonials, logos, case studies, conversion lifts, or time-saved statistics.

## Final quality-control checklist

- [ ] The hero tells the post-to-payment story in five seconds or less.
- [ ] The product visual is based on real Seenpaid UI wherever possible.
- [ ] The revenue panel is the focal point; automation supports it rather than competing with it.
- [ ] Every sample metric is clearly identified as illustrative.
- [ ] Platform availability is stated accurately and consistently.
- [ ] Pricing names the same billing unit everywhere.
- [ ] Trial terms are visible beside the primary CTA and repeated accurately at pricing.
- [ ] Every section has a distinct visual purpose and the page has a deliberate rhythm.
- [ ] Motion clarifies the workflow, stops in a final state, and respects reduced-motion preferences.
- [ ] Mobile layouts are redesigned for the smaller screen rather than mechanically compressed.
- [ ] Keyboard focus, contrast, semantic structure, readable type, and alt text are checked.
- [ ] The site is tested on real devices and optimized for fast loading.

**Final creative direction:** Make the visitor feel that Seenpaid gives them a calmer, clearer way to run the publishing side of their business. The memorable image is not a happy person with a laptop. It is one piece of content moving through a well-designed system and returning useful evidence about what happened next.
