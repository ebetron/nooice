Nooice.js
======

Ever wanted to Nooice your users every time they make a Nooice action like hitting a button you think is Nooice, or scrolling down a Nooice page? Now you can using Javascript. 

Usage
-----

System Requirements:
* Somewhere to host Nooice.js - Nooice.js uses Web Audio API. The .mp3 files associated with the .js cannot be read locally, they must be served through an Apache, Grunt server, etc.
* Safari, Firefox, Chrome - this has not been tested on IE (nor should it be, IE sucks!)
* Make sure the "sounds" directory included with this repo is in the same directory as where you place nooice.js

Make sure to include the nooice.js script in the HTML Doc you want to Nooice.

```sh
<script src="nooicejs/nooice.js" type="text/javascript"></script>
```

Then, make sure you call init before using any of the Nooice functions:
```sh
Nooice.init();
```
Nooice.js has three functions that can be applied to any event listener:

#####Short Nooice
```sh
Nooice.shorter();
```
#####Regular Nooice
```sh
Nooice.regular();
```
#####Long Nooice
```sh
Nooice.longer();
```

Where did this come from?
------

Just watch this

<a href="https://www.youtube.com/watch?v=rQnYi3z56RE" target="_blank">Key & Peele - Nooice</a>

Nooice.js is inspired by the Key & Peele comedy sketch of the same name. The audio files included in this repo however, are not sampled from the video, they are the voice of the author of this repo.
