---
articleTitle: KotOR SaveGame Editor on Linux
date: 2025-08-17T09:31:57+0800
desc: A guide for using KotOR SaveGame Editor on Linux.
tags: kotor on linux guides
topics: ["star wars kotor", "star wars kotor 2", "star wars kotor on linux", "linux gaming"]
toc: true
hasCodeBlock: true
---
## Introduction

KotOR SaveGame Editor, abbreviated KSE, originally created by [tk102](https://web.archive.org/web/20181204145431/http://www.starwarsknights.com/tools.php#kse) and later maintained by [Fair Strides](https://deadlystream.com/files/file/503-kotor-savegame-editor/), has been the go-to tool for editing save files of {{ cite "Star Wars: Knights of the Old Republic" }} series of video games since the early modding scene of {{ cite "KotOR" }} in the 2000s.

Like almost every tool for the {{ cite "KotOR" }} games, KotOR SaveGame Editor was developed for Windows, since the {{ cite "KotOR" }} games themselves were initially developed for Windows and Xbox only. However, you can run KotOR SaveGame Editor on Linux.

## Requirement for Running KSE on Linux

What you need is to have [Wine](https://www.winehq.org/) installed in your Linux system. Wine is a compatibility layer for running Windows programs in Unix-like operating systems such as Linux, macOS and BSD. Wine has been the go-to method for allowing users of Unix-like operating systems to run and use Windows programs, and thus is available in the software repository of major Linux distributions. You can search the web for how to install Wine for your Linux distro.

Once you have Wine installed, you can simply run KotOR SaveGame Editor by launching the `.exe` files, namely `kse.exe` for the main program, and `KPF.exe` for configuring your {{ cite "KotOR" }} games' installation path so KSE will try to detect your save files based on where you installed the {{ cite "KotOR" }} games.

## Issue with Using KSE with Steam's Linux Port of {{ cite "KotOR 2" }}

However, if you play Steam's Linux port of {{ cite "Star Wars: Knights of the Old Republic II: The Sith Lords" }}, which is the default when you install {{ cite "KotOR 2" }} on Linux with Steam, the original version of KSE will not be able to detect your {{ cite "KotOR 2" }} save files on your local machine. This is because Steam's Linux port of {{ cite "KotOR 2" }} places the game's local save files in a completely different location from the main game, while the cloud saves are within the main {{ cite "KotOR 2" }}.

By default, Steam's installation path for {{ cite "KotOR 2" }} on Linux is `$HOME/.local/share/Steam/steamapps/common/Knights of the Old Republic II`, with `$HOME` being your home directory. For example, if you use `jane` as your username on your Linux system, your home directory would be `/home/jane`, and the default installation path for {{ cite "KotOR 2" }} on Steam would be `/home/jane/.local/share/Steam/steamapps/common/Knights of the Old Republic II`. However, the location of the local save files of Steam's Linux port of {{ cite "KotOR 2" }} is always `$HOME/.local/share/aspyr-media/kotor2/saves`, even if you choose to install {{ cite "KotOR 2" }} on a different location than the default. This means Steam put the local save files of its Linux port of {{ cite "KotOR 2" }} outside the Steam folder.

On the other hand, the Windows version of the {{ cite "KotOR" }} games put the save files in a "saves" sub-folder in the main folder of the game. As KSE was originally developed for Windows, it assumes your {{ cite "KotOR" }} games' save files are within the same folder as your main {{ cite "KotOR" }} game folder, so it will fail if your save files are in a completely different folder from your main {{ cite "KotOR" }} game folder, which is the case for Steam's Linux port of {{ cite "KotOR 2" }}.

## nadrino's Fork of KSE With Steam's Linux Port {{ cite "KotOR 2" }}

Fortunately, you can still edit your local save files from Steam's Linux port of {{ cite "KotOR 2" }}. What you need is [nadrino's fork of KotOR SaveGame Editor](https://github.com/nadrino/kotor-savegame-editor).

nadrino's fork of KSE includes features not present in the original version of KSE, with the one most relevant to this guide is being able to individually set the installation path and save file location of the {{ cite "KotOR" }} games, instead of only being able to set the installation path like in the original KSE, and let KSE assume the location of your save files. You still need Wine to run nadrino's fork of KSE, but as long as you can run it on Linux, you will be able to use it and edit your save files from Steam's Linux port of {{ cite "KotOR 2" }}.

Follow the instructions to download nadrino's fork of KSE. When you reach the step where you need to make sure `kse.ini` contains the right paths to your {{ cite "KotOR" }} games, open `kse.ini` with a text editor, and change the values of the {{ cite "KotOR 2" }} paths to the following:

```ini
K2_Path=\home\jane\.local\share\Steam\steamapps\common\Knights of the Old Republic II\steamassets
K2_SavePath=\home\jane\.local\share\aspyr-media\kotor2\saves
K2_SavePathCloud=\home\jane\.local\share\Steam\steamapps\common\Knights of the Old Republic II\cloudsaves
```

Replace `jane` with your username on your Linux system.

You need to set the {{ cite "KotOR 2" }} path to the `steamassets` sub-folder instead of the main {{ cite "KotOR 2" }} so KSE can detect the game's assets. It is worth noting that if you install mods for Steam's Linux port of {{ cite "KotOR 2" }}, you need to install them in the `steamassets` sub-folder as well.

You need to set the paths with backslashes ([`\`]{aria-hidden=true}) instead of forward slashes ([`/`]{aria-hidden=true}), otherwise KSE may not be able to properly detect your paths.

After you have done editing `kse.ini`, save the `.ini` file and launch `KSE.exe`.

## KSELinux

During my research for trying to use KotOR SaveGame Editor with Steam's Linux port of {{ cite "KotOR 2" }}, I came across [KSELinux](https://github.com/Bolche/KSELinux). However, using it requires more technical expertise, since you need to build the program yourself, which involves installing the necessary modules for Perl, the programming language used for developing KSE. If your system lacks the necessary Perl modules, it can be time-consuming to install the modules and ensure things are set up correctly.

As the author of KSELinux noted, it is a hack with no guarantee it will work for you, so you may encounter errors, and some features may not work as intended.

You may try out KSELinux if you have the technical knowledge to build the program, but otherwise, I would recommend using adrino's Fork of KSE instead.

## Wrapping Up

I decided to write this guide after spending a fair amount of time in figuring out how to use KotOR SaveGame Editor with Steam's Linux port of {{ cite "KotOR 2" }}, so I hope fellow Linux players would find this guide helpful.
