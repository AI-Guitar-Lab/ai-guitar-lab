# AI Guitar Lab

**[▶ Open AI Guitar Lab](https://ai-guitar-lab.github.io/ai-guitar-lab/)**

A free guitar practice app that runs in your browser. It covers theory, technique, ear training and four style paths (blues, rock, acoustic and jazz), all built around seeing the whole neck.

**Built with AI.** AI Guitar Lab was built entirely with AI (Claude, by Anthropic). Every line of code and every lesson was written by AI.

## Contents

- [What's new](#whats-new)
- [What's inside](#whats-inside)
- [How to open it](#how-to-open-it)
- [Your data](#your-data)
- [Suggestions, ideas and bug reports](#suggestions-ideas-and-bug-reports)
- [Licence](#licence)
- [Instrument sample credits](#instrument-sample-credits)

## What's new

- **Tab drawn like a tab book.** Lines wrap down the screen to fit your phone or computer, so there's no sideways scrolling. During playback the page scrolls itself to follow along, so both hands stay on the guitar. The notation is drawn in the style of pro tab software: curved bend arrows marked ½, full or 1½, releases and pre-bends, slurs with H and P for hammer-ons and pull-offs, slide lines, wavy vibrato lines, P.M. brackets, harmonics, tapping, bar numbers and the rhythm under every note.
- **Speed coach on every lick.** Each lick gets a start tempo, a target tempo and a step. You can raise the tempo yourself, let it go up automatically every two loops, or turn on the Listen coach, which goes up a step after two passes scoring 90 or more. A Bursts mode plays one beat, two beats or a bar at the target tempo. There's also a short guide to building speed, with yardsticks for 16th notes at intermediate, advanced and shred levels. The finger drills get a start tempo and target tempo too.
- **Theory made simple.** Sixteen short lessons, one idea each. Every lesson has the idea in one sentence, sounds to hear, the shape on the neck, a tab to play, famous songs that use it, a two-minute task and a quick check.
- **Easier first.** In Practice, the shorter, easier pieces come first, and the longer, faster ones sit under "Go further".

## What's inside

- **Home**: a daily whole-neck challenge, a roadmap from intermediate to advanced, and a 28-day course.
- **Practice**: a Practice home that sorts everything by what it trains; a Scale playground (any key and scale, a backing groove, just play); six hubs of playable material (speed licks, acoustic pieces, triad songs, rhythm grooves, phrasing and feel, chord-tone licks); pick-up-and-play sessions, a finger technique ladder, a check-up, ear training, neck-note drills and public-domain songs with tab and sound.
- **Theory**: Theory made simple (16 one-idea lessons), then six workshops, keys and the circle of fifths, CAGED shapes, triads, guide tones, intervals and a scale and mode explorer.
- **Styles**: blues, rock, acoustic and jazz lessons. Every lick can be moved up or down the neck.
- **Tools**: a jam station with drums, bass and chords in five styles, a tuner, a tab builder, a metronome and a practice plan.
- **Listen mode**: turn on the microphone and the app hears you play. Every tab player marks each note right, early, late, wrong or missed and gives a score with a coaching tip. Listen also works in Neck notes ("Play it"), Play it back (call-and-response ear training) and on the Jam station.
- **Today's session**: a daily plan built from your weakest areas, with a streak and progress charts.
- **Real instrument sound**: recorded electric, steel-string, nylon and palm-muted guitars, a fingered bass and a studio drum kit, stored inside the page so it works offline. The original synth is still there as a fallback.
- **Amp**: drive, tone, reverb and delay for every sound the app plays, plus clean, warm jazz, blues drive, rock crunch, lead, acoustic and nylon tones.
- **Techniques in the tab**: hammer-ons (h), pull-offs (p), slides (/ and \\), taps (t), bends (b), bend and release (br), pre-bends (bR), vibrato (~), palm mutes (PM) and harmonics (<12>), each one played the way it really sounds.
- **Speed paths**: a ten-step Blues speed path and a ten-step Rock & shred path, each with tempo ladders that turn green as Listen mode scores you 90 or more.
- **Technique lab**: legato, slides and tapping; bends and vibrato; and a picking lab (string crossing, speed bursts, crosspicking, chicken pickin', palm muting, rakes, fingerstyle and Travis picking).
- **Full pieces**: public-domain classics (House of the Rising Sun, Greensleeves, Minuet in G, the opening of Spanish Romance) and original pieces in drop D, DADGAD, fingerstyle blues, slow blues, Texas shuffle, rock, country, bluegrass and Celtic styles.
- **Learn the real songs**: what makes 38 famous songs work, with links to the exercises that build those skills.

## How to open it

- **Online:** open https://ai-guitar-lab.github.io/ai-guitar-lab/
- **On your own computer:** download `index.html` and open it in any modern browser. You don't need to install anything or run a build step.

Sound uses the Web Audio API, so tap or click once on the page to let the browser play audio. On a phone you can add it to your home screen to use it like an app.

## Your data

There are no accounts, no tracking and no server. Your progress is saved in your browser's local storage on your device. If you clear your browser data, your progress is cleared with it. Microphone sound is analysed in the browser as you play. It is never recorded, saved or sent anywhere; only your scores are kept. The only outside request is for web fonts from Google Fonts. The instrument samples are stored inside `index.html`, so no sound files are downloaded from anywhere else.

## Suggestions, ideas and bug reports

We're open to suggestions, recommendations and fixes, and we'd love to hear from you.

- **Found a bug, or have an idea or a lesson request?** [Open an issue](https://github.com/AI-Guitar-Lab/ai-guitar-lab/issues/new). Tell us which page you were on, what you expected and what happened. For a tab or theory mistake, name the lesson or lick. You'll need a free GitHub account.
- **Want to see what's already been suggested?** Browse the [issues list](https://github.com/AI-Guitar-Lab/ai-guitar-lab/issues), and add a 👍 or a comment to anything you'd like too.
- **Want to fix something yourself?** The whole app is one file, `index.html`. Fork the repository, make your change and open a pull request that explains what it fixes.

There's also a "Suggest an idea or report a bug" link at the bottom of every page in the app.

## Licence

[MIT](LICENSE)

## Instrument sample credits

The guitar, bass and drum samples come from the Fluid (R3) General MIDI SoundFont, in the mono version shipped with MuseScore. They were trimmed, retuned and compressed for this app. The original notices, which must travel with any derivative work, are:

- FluidR3 (original version) by Frank Wen, Copyright © 2000–2002, 2008. Released under the MIT licence.
- Mono conversion (FluidR3Mono) by Michael Cowgill, Copyright © 2014–17.
- Adaptation for MS_General.sf2 by S. Christian Collins, Copyright © 2018.
- Temple Blocks instrument provided by Ethan Winer, Copyright © 2002. Drumline Percussion provided by Michael Schorsch, Copyright © 2016.

MIT licence (Fluid R3): Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Song titles mentioned in the app are for reference only. The app contains no tab or recordings of copyrighted songs.
