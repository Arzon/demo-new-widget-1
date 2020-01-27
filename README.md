<<<<<<< HEAD
### install dependencies
`npm install`

### serve with hot reload at localhost:8080
`npm run dev`

### build for production with minification
`npm run build`

### copy auth_config.local.json to auth_config.json
### copy dashboard_config.local.json to dashboard_config.json

## File Structure


## File Structure

Within the download you'll find the following directories and files:

```
vue-material-dashboard-pro/
├── CHANGELOG.md
├── README.md
├── babel.config.js
├── package.json
├── postcss.config.js
├── public
│   ├── img
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   └── scss
│   │       ├── material-dashboard.scss
│   │       └── md
│   ├── components
│   │   ├── AnimatedNumber.vue
│   │   ├── Badge.vue
│   │   ├── Cards
│   │   │   ├── ChartCard.vue
│   │   │   ├── GlobalSalesCard.vue
│   │   │   ├── LockCard.vue
│   │   │   ├── LoginCard.vue
│   │   │   ├── NavTabsCard.vue
│   │   │   ├── PricingCard.vue
│   │   │   ├── ProductCard.vue
│   │   │   ├── SignupCard.vue
│   │   │   ├── StatsCard.vue
│   │   │   └── TestimonialCard.vue
│   │   ├── Collapse.vue
│   │   ├── Dropdown.vue
│   │   ├── Inputs
│   │   │   └── IconCheckbox.vue
│   │   ├── Modal.vue
│   │   ├── NotificationPlugin
│   │   │   ├── Notification.vue
│   │   │   ├── Notifications.vue
│   │   │   └── index.js
│   │   ├── Pagination.vue
│   │   ├── SidebarPlugin
│   │   │   ├── SideBar.vue
│   │   │   ├── SidebarItem.vue
│   │   │   └── index.js
│   │   ├── Slider.vue
│   │   ├── Tables
│   │   │   └── GlobalSalesTable.vue
│   │   ├── Tabs.vue
│   │   ├── Timeline
│   │   │   ├── TimeLine.vue
│   │   │   └── TimeLineItem.vue
│   │   ├── Wizard
│   │   │   ├── Wizard.vue
│   │   │   ├── WizardTab.vue
│   │   │   └── throttle.js
│   │   ├── WorldMap
│   │   │   ├── AsyncWorldMap.vue
│   │   │   ├── WorldMap.vue
│   │   │   └── world_map.js
│   │   └── index.js
│   ├── globalComponents.js
│   ├── globalDirectives.js
│   ├── main.js
│   ├── material-dashboard.js
│   ├── pages
│   │   ├── Dashboard
│   │   │   ├── Calendar.vue
│   │   │   ├── Charts.vue
│   │   │   ├── Components
│   │   │   │   ├── Buttons.vue
│   │   │   │   ├── GridSystem.vue
│   │   │   │   ├── Icons.vue
│   │   │   │   ├── Notifications.vue
│   │   │   │   ├── Panels.vue
│   │   │   │   ├── SweetAlert.vue
│   │   │   │   └── Typography.vue
│   │   │   ├── Dashboard.vue
│   │   │   ├── Forms
│   │   │   │   ├── ExtendedForms.vue
│   │   │   │   ├── RegularForms.vue
│   │   │   │   ├── ValidationForms
│   │   │   │   │   ├── LoginForm.vue
│   │   │   │   │   ├── RangeValidationForm.vue
│   │   │   │   │   ├── RegisterForm.vue
│   │   │   │   │   └── TypeValidationForm.vue
│   │   │   │   ├── ValidationForms.vue
│   │   │   │   ├── Wizard
│   │   │   │   │   ├── FirstStep.vue
│   │   │   │   │   ├── SecondStep.vue
│   │   │   │   │   └── ThirdStep.vue
│   │   │   │   └── Wizard.vue
│   │   │   ├── Layout
│   │   │   │   ├── Content.vue
│   │   │   │   ├── ContentFooter.vue
│   │   │   │   ├── DashboardLayout.vue
│   │   │   │   ├── Extra
│   │   │   │   │   ├── MobileMenu.vue
│   │   │   │   │   └── UserMenu.vue
│   │   │   │   └── TopNavbar.vue
│   │   │   ├── Maps
│   │   │   │   ├── API_KEY.js
│   │   │   │   ├── FullScreenMap.vue
│   │   │   │   ├── GoogleMaps.vue
│   │   │   │   ├── VectorMaps.vue
│   │   │   │   ├── WorldMap.vue
│   │   │   │   └── world_map.js
│   │   │   ├── Pages
│   │   │   │   ├── AuthLayout.vue
│   │   │   │   ├── Lock.vue
│   │   │   │   ├── Login.vue
│   │   │   │   ├── Pricing.vue
│   │   │   │   ├── Register.vue
│   │   │   │   ├── RtlSupport.vue
│   │   │   │   ├── TimeLinePage.vue
│   │   │   │   ├── UserProfile
│   │   │   │   │   ├── EditProfileForm.vue
│   │   │   │   │   └── UserCard.vue
│   │   │   │   └── UserProfile.vue
│   │   │   ├── Tables
│   │   │   │   ├── ExtendedTables.vue
│   │   │   │   ├── PaginatedTables.vue
│   │   │   │   ├── RegularTables.vue
│   │   │   │   └── users.js
│   │   │   └── Widgets.vue
│   │   └── index.js
│   └── routes
│       └── routes.js
├── vue.config.js

```
=======
**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
>>>>>>> f241a1de514b2c1991a8290b84691dbc27872bb1
