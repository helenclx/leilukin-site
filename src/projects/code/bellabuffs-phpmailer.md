---
title: BellaBuffs with PHPMailer Integration
desc: My fork of BellaBuffs, with PHPMailer powering the email sending features.
eleventyNavigation:
    order: 4
---

* [Demo](https://fan.leilukin.com/cassettebeasts){.link-btn}
* [Source Code (GitHub)](https://github.com/helenclx/BellaBuffs-PHPMailer){.link-btn}
* [Source Code (Gitea)](https://git.32bit.cafe/Leilukin/BellaBuffs-PHPMailer){.link-btn}
* [Download (GitHub)](https://github.com/helenclx/BellaBuffs-PHPMailer/releases/latest){.link-btn}
{.link-btn--wrapper}

This is a fork of the fanlisting PHP script [BullaBuffs](https://github.com/jemjabella/BellaBuffs), with the email sending library [PHPMailer](https://github.com/PHPMailer/PHPMailer) integrated.

BellaBuffs includes the optional features to email new members after submitting the join form, email the fanlisting admin when a new member joins or email new members when their applications were approved. The original BellaBuffs script achieved this by using PHP's built-in `mail()` feature.

This fork replaces the PHP `mail()` functions from BellaBuffs with PHPMailer, allowing a fanlisting to send out emails with SMTP, provided the fanlisting owner chooses to enable them, even if the hosting server does not support the PHP `mail()` function.

I created this BellaBuffs fork when I was building the [{{ cite "Cassette Beasts" }} fanlisting](https://fan.leilukin.com/cassettebeasts) with BellaBuffs and hosting the fanlisting on [InfinityFree](https://www.infinityfree.com/). I learned that InfinityFree's free hosting plan [does not support PHP `mail()` function](https://forum.infinityfree.com/t/sending-email-from-your-website-php-mail/49242), so incorporating PHPMailer was the solution to allow the {{ cite "Cassette Beasts" }} fanlisting to send emails.

More information about my BellaBuffs fork and instructions for how to use it can be found on [its GitHub repository](https://github.com/helenclx/BellaBuffs-PHPMailer) and [its Gitea repository mirror](https://git.32bit.cafe/Leilukin/BellaBuffs-PHPMailer).

## Features
* Integrate PHPMailer for the email sending features, should the fanlisting owner enables these features
* Email sending features are enabled by default, but can be disabled in `prefs.php`
* HTML5 form validation, including E-mail and URL input types and the `required` attribute
* Update list of countries
* Add a buttons folder (with a placeholder file to enable the folder to be pushed via Git), so users do not need to manually create the folder to store uploaded buttons
* Allows fnalisting members to change their favourites with the update form if favourites field is enabled
