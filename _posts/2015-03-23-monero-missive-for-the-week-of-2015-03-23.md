---
layout: post
title: Dev Diaries for the Week of 2015-03-23
summary: Detail on the structure of the new blockchain conversion and import utilities
tags: [monero missives, dev diaries, blockchaindb, core]
author: Riccardo Spagni (fluffypony)
forum: https://forum.getmonero.org/1/news-announcements-and-editorials/245/monday-monero-missives-27-march-23rd-2015
---

<div class="text-center"><iframe style="border: none" src="//html5-player.libsyn.com/embed/episode/id/3450222/height/360/width/640/theme/standard-mini/direction/no/autoplay/no/autonext/no/thumbnail/yes/preload/no/no_addthis/no/" height="600" width="600" scrolling="no"  allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe></div>

To download the podcast directly please [use this link to the MP3](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-03-23.mp3), or [this link to the AAC/MP4](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-03-23.mp4), or [this link to the FLAC](http://traffic.libsyn.com/monero/Monero_Missives_Podcast_for_the_week_of_2015-03-23.flac).

A brief summary of the points discussed follows, a full transcription of the podcast is outstanding (can be submitted via [Github Issues](https://github.com/monero-project/monero-site/issues)).

In this week's podcast we discuss the new blockchain utilities in preparation for their final merge.

1. blockchain_converter converts between database types, right now its only job is to convert from the old in-RAM system to an lmdb database. It chews memory, though, as it has to keep the blockchain in RAM as well as the lmdb driver.

2. blockchain_export takes the default database (set at compile time) and exports it to a blockchain.raw file. This is the file we're going to make available for download as the blockchain bootstrap in future.

3. blockchain_import imports from the blockchain.raw file into whatever database format (specified at runtime, the default database is specified at compile time). It allows you to import with verification off for the fastest possible speed, specify LMDB options, and specify a batching count for loading in chunks.

Until next week!