# Water Relay · Campus to Cloud Round 1

## Round 1 links

- [Live AWS Amplify prototype](https://main.d24tx0et6a4gf5.amplifyapp.com/)
- [Source repository](https://github.com/ihariprasanth/water-relay)
- [Demo video](https://youtu.be/kbUFNGoPpw8)

## Idea brief

A ward volunteer often receives duplicate water-outage messages from the same street. Water Relay groups reports by ward and normalized location, puts essential sites first, and shows which signals contributed to the queue. It uses synthetic data and does not dispatch crews or contact residents.

## Build summary

Vanilla JavaScript and browser storage form the prototype. AWS Amplify Hosting serves the static prototype over HTTPS. Manual ZIP deployment was chosen to keep the deployment independent of GitHub permissions and backend infrastructure. The data stays on the current browser. Shared multi-user data would require a separate backend and authentication.

## Demo script · 90 seconds

Open Water Relay, explain the intake form, then load sample reports. Show that two versions of Market Road are combined and that the clinic ranks first. Add another report to Market Road and point out the updated count and maximum outage duration. Reload to show persistence. Open the live AWS-hosted prototype to try the same flow.

## Round 1 checklist

AWS-hosted working URL, source repository, idea brief, AWS build summary, demo video under three minutes, and student verification. Round 1 closes 30 November 2026 at 11:59 PM IST. The organizer recommends student verification by 27 November.

