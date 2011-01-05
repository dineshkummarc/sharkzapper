<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
<!--
/*
 * sharkZapper is Copyright (C) 2010 Adam Malcontenti-Wilson <adman.com@gmail.com>
 * You are hereby granted a licence to use the software as-is, and view the source code for educational purposes.
 * You may not create deriviate versions of the software without written permission of the author.
 * 
 * Grooveshark imagery and related media is Copyright (C) Escape Media Group. 
 * "Grooveshark" and Grooveshark Logos are trademarks of Escape Media Group.
 */
-->
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en"> 
<head>
	<title>SharkZapper</title>
	<link rel="stylesheet" href="http://static.a.gs-cdn.net/webincludes/css/production.css?20101203.13" type="text/css" />
	<style type="text/css">
	body { 
		min-width: 300px;
		min-height: 160px;
		-webkit-user-select: none;
		cursor: default;
	}
	body.noAlbumArt {
	    min-width: 200px;
	}
	body.notPlaying {
		min-height: 60px;
	}
	a, a:hover {
	    color: white !important;
    }
	.hidden, body.notification #pin, body.notification #search, body.notPlaying #albumart, body.notPlaying #songDetails, body.notPlaying #player_volume, body.notPlaying #playerDetails_nowPlaying, body.notPlaying #queue_position, body.notPlaying #player_controls_right, body.noAlbumArt #thumbnail { display: none !important; }
	.fltlft { float: left; }
	.fltrht { float: right; }
	#thumbnail { overflow: hidden; }
	#player_controls_right, #player_controls_playback { float: none; }
	body.notification:not(.notPlaying) #albumart {
	    height: 100px;
	}
	body.notification:not(.notPlaying) #thumbnail #player_controls_playback {
	    opacity: 0.02;
   	    z-index: 20000;
   	    height: 1px;
   	    margin-top: -1px;
   	    overflow: hidden;
   	    -webkit-transition-duration: 500ms;
   	    -webkit-transition-delay: 500ms;
	}
	body.notification:not(.notPlaying) #thumbnail:hover #player_controls_playback,
	body.notification.paused:not(.notPlaying) #thumbnail #player_controls_playback { 
        margin-top: -40px;
	    opacity: 0.96;
	    height: 40px;
   	    -webkit-transition: opacity ease 200ms, height ease 200ms, margin ease 200ms;
   	    -webkit-transition-delay: 0;
    }
    #player_controls_right {
        margin-top: -40px;
        opacity: 0.02;
        z-index: 20000;
        position: absolute;
        width: 100px;
        height: 32px;
        overflow: hidden;
        background: url(http://static.a.gs-cdn.net/webincludes/css/images/player/controls.png) no-repeat top right;
        -webkit-transition-duration: 500ms;
   	    -webkit-transition-delay: 500ms;
    }
    #player_controls_right button {
        margin-top: -4px;
    }
    #player_controls_right:first-child {
        padding-left: 5px;
    }
    #thumbnail:hover #player_controls_right {
        opacity: 0.96;
        margin-top: 0;
        -webkit-transition: opacity ease 200ms, height ease 200ms, margin ease 200ms;
   	    -webkit-transition-delay: 0;
    }
    body #songDetails div.scrollable {
        text-wrap: none;
        white-space: nowrap;
        height: 1.1em;
        text-overflow: ellipsis;
    }
    body.notification #songDetails div.scrollable {
        overflow: hidden;
        width: 180px;
    }
	#pin { 
	    background: transparent url(pin.png) no-repeat; 
	    height: 16px;
	    width: 17px;
        display: block;
        position: absolute;
        right: 115px;
        top: 12px;
	}
	body.noAlbumArt #pin {
	    right: 15px;
    }
	#settingsBtn {
	    position: absolute;
        right: 136px;
        top: 12px;
        height: 16px;
        width: 16px;
        background: transparent url(settings_icon.png) no-repeat;
	}
	body.noAlbumArt #settingsBtn {
	    right: 36px;
	}
	body.notification #settingsBtn, #settingsBtn.noPin {
	    right: 118px;
	}
	body.noAlbumArt.notification #settingsBtn, body.noAlbumArt #settingsBtn.noPin {
	    right: 18px;
	}
	#thumbnail {
		position: absolute;
		right: 8px;
		top: 8px;
		z-index: 6000;
		-webkit-box-shadow: gray 0px 0px 10px;
	}
	#thumbnail img#albumart {
		max-width: 100px;
	}
	#songDetails {
		padding: 8px;
		margin-right: 115px;
	}
	body.noAlbumArt #songDetails {
	    margin-right: 5px;
	}
	#lowerControls {
		margin-right: 110px;
	}
	body.noAlbumArt #lowerControls {
	    margin-right: 5px;
	}
	#songName {
		font-weight: bold;
	}
	#player_volume {
		background: url(volume_icon.png) no-repeat;
		margin: 0px;
		padding: 0px;
		width: 20px;
		height: 20px;
	}
	#player_volume.mute {
		background: url(mute_icon.png) no-repeat;
	}
    	#search {
		padding: 0px 8px 4px;
		clear: both;
	}
	#searchBox {
		background: #333 url(search_icon.png) 2px center no-repeat !important;
		color: #FFF;
		border-radius: 4px;
		margin-top: 4px;
		padding: 2px 2px 2px 16px;	
		-webkit-user-select: text;
        -webkit-appearance: none;
	}
	#bufferinglogo {
	    position: absolute;
	    left: 8px;
	    top: 8px;
	    display:block;
	    background:url(loading_header.gif) no-repeat;
	    height: 32px;
	    width: 32px;
	    z-index: 200000;
	}
	#playerDetails_nowPlaying {
		height: 24px;
	}
	#playerDetails_nowPlaying .btn.add {
		border-top-left-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	#playerDetails_nowPlaying .btn.favorite {
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	#playerDetails_nowPlaying .btn.radio_btn {
		display: none;
	}
	#playerDetails_nowPlaying.radioOn .btn.radio_btn {
		display: block;
	}
	#playerDetails_nowPlaying.radioOn .btn.favorite {
		border-radius: 0px;
	}
	#playerDetails_nowPlaying.radioOn .frown {
		border-top-right-radius: 6px;
		border-bottom-right-radius: 6px;
	}
	#playerDetails_nowPlaying .btn {
		margin: 0px 1px 0px 0px;
		width: 20px;
	}
	#playerDetails_nowPlaying .frown, #playerDetails_nowPlaying .smile {
		background: url(smile_frown_icons.png) no-repeat;
	}
	#playerDetails_nowPlaying .frown {radioSmileBtn
		background-position: -20px 0px;
	}
	#playerDetails_nowPlaying .smile:hover {background-position: 0 -18px;}
	#playerDetails_nowPlaying .smile:active {background-position: 0 -36px;}
	#playerDetails_nowPlaying .smile.selected {background-position: 0 -54px;}
	#playerDetails_nowPlaying .smile.selected:active {background-position: 0 -36px;}
	#playerDetails_nowPlaying .frown {background-position: -20px 0;}
	#playerDetails_nowPlaying .frown:hover {background-position: -20px -18px;}
	#playerDetails_nowPlaying .frown:active {background-position: -20px -36px;}
	#playerDetails_nowPlaying .frown.selected {background-position: -20px -54px;}
	#playerDetails_nowPlaying .frown.selected:active {background-position: -20px -36px;}
	#player_play_pause.buffering {
	    background: url(http://static.a.gs-cdn.net/webincludes/css/images/player/loading.gif) 8px 8px no-repeat, url(http://static.a.gs-cdn.net/webincludes/css/images/player/controls.png) no-repeat -150px 0px;
	}
	#player_times { 
		width: auto;
	}
	
	#queue_position {
	    position: absolute;
        right: 0px;
	    background-color: rgba(25, 25, 25, 0.65);
        border-bottom-left-radius: 6px;
        font-size: 10px;
        padding: 2px 2px 4px 4px;
        text-shadow: black 0px 0px 3px;
	}
	#queue_position #queue_current_position {
	    color: #FFF;queue_position
        display: block;
        float: left;
        height: 14px;
        font-size: 12px;
        line-height: 12px;
    }
	#queue_position #queue_total, #queue_position #queue_position_separator {
	    color: #AAA;
        display: block;
        float: left;
        height: 14px;
        line-height: 14px;
    }
    
    #volumeControl {
        bottom: 10px;
        left: 4px;
        width: 180px;
        height: 32px;
        background: url(volume_bg.png) no-repeat;
        display: none;
    }
    body.notification #volumeControl {
        top: 90px;
    }
    #volumeSlider {
        width: 150px;
        height: 16px;
    }
    #volumeSlider .ui-slider-range{
        margin: 6px;
        height: 8px;
        bottom: -3px;
        background: url(volume_range.png) repeat-x;
    }
	</style>
	<script type="text/javascript" src="js/jquery-1.4.4.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui-1.8.7.slider.min.js"></script>
	<script type="text/javascript">
	var defaultAlbumArtUrl = 'http://static.a.gs-cdn.net/webincludes/images/default/album_100.png';	
	var statusMap = ["PLAY_STATUS_NONE", "PLAY_STATUS_INITIALIZING", "PLAY_STATUS_LOADING", "PLAY_STATUS_PLAYING", "PLAY_STATUS_PAUSED", "PLAY_STATUS_BUFFERING", "PLAY_STATUS_FAILED", "PLAY_STATUS_COMPLETED"];
	var repeatMap = ["REPEAT_NONE","REPEAT_ALL","REPEAT_ONE"];
	var songId = null;
	var tabId = null;
	var debug = false;
	var debugStatusUpdate = false;
	var scrollTimeouts = [];
	var volumeControlTimeout = null;
	var lastVolume = null;

	String.prototype.pad = function(l, s){
    return (l -= this.length) > 0 
        ? (s = new Array(Math.ceil(l / s.length) + 1).join(s)).substr(0, s.length) + this + s.substr(0, l - s.length) 
        : this;
	};
	
	function getSetting(settingName,callback) {
		if (debug) console.log("sharkzapper:",">>>","getSetting",settingName);
		chrome.extension.sendRequest({"command":"getSetting","source":"popup","settingName":settingName},callback);
	}

	function sendMessage(request) {
		request.source = "popup";
		request.notification = $('body').hasClass('notification');
		if (debug) console.log("sharkzapper:",">>>",request.command,request);
		chrome.extension.sendRequest(request);
	}
	
	function loadVolumeEffects() {
	    $("#player_volume").mouseenter(function(){
            $("#volumeControl").fadeIn(200);
        });
        $("#player_volume").mouseleave(function(){
            if(volumeControlTimeout) clearTimeout(volumeControlTimeout);
            volumeControlTimeout = setTimeout('$("#volumeControl").fadeOut(200);',1200);
        });
        $("#volumeControl").mouseenter(function(){
            if(volumeControlTimeout) clearTimeout(volumeControlTimeout);
        });
        $("#volumeControl").mouseleave(function(){
            if(volumeControlTimeout) clearTimeout(volumeControlTimeout);
            volumeControlTimeout = setTimeout('$("#volumeControl").fadeOut(200);',600);
        });
	}
	
	function volumeUpdate(e,b) {
        if (debug) console.log('volume update',e,b);
	    if (e.originalEvent) sendMessage({"command":"volumeUpdate","volume":$('#volumeSlider').slider("option", "value")});
	}

	$(document).ready(function(){
	    // Add class for notification
	    if(location.hash == '#notification') {
	        $('body').addClass('notification');
    	}
    	
    	// Add Button click handlers
		$('#player_previous').click(function(){sendMessage({"command": "prevSong"})});
		$('#player_next').click(function(){sendMessage({"command": "nextSong"})});
		$('#player_shuffle').click(function(){sendMessage({"command": "setShuffle", "shuffle": !$('#player_shuffle').hasClass('active')})});
		$('#player_crossfade').click(function(){sendMessage({"command": "setCrossfadeEnabled", "enabled": !$('#player_crossfade').hasClass('active')})});
		$('#player_loop').click(function(){
		    if ($(this).hasClass("active") && $(this).hasClass("one")) {
                sendMessage({"command": "setRepeat", "repeatMode":"REPEAT_NONE"});
            } else if ($(this).hasClass("active")) {
                sendMessage({"command": "setRepeat", "repeatMode":"REPEAT_ONE"});
            } else {
                sendMessage({"command": "setRepeat", "repeatMode":"REPEAT_ALL"});
            }
		});
	    $('#pin').click(function(){sendMessage({"command": "pinPopup"})});
	    $('#settingsBtn').click(function(){sendMessage({"command":"openGSTab", "url":"#/settings/sharkzapper"})});
		$('#player_play_pause').click(function(){
			if($('#player_play_pause').hasClass('paused')) {
				sendMessage({"command": "resumeSong"});
			} else if (!$('#player_play_pause').hasClass('playing')) {
				sendMessage({"command": "playSong"});
			} else {
				sendMessage({"command": "pauseSong"});
			}
		});
		$('#grooveshark').click(function(){sendMessage({"command":"openGSTab"});});
		$('#player_volume').click(function(){sendMessage({"command": "toggleMute"});});
		$('#addToLibraryBtn').click(function(){
			if ($('#addToLibraryBtn').hasClass('selected')) {
				sendMessage({"command": "removeFromLibrary", "songId": songId});
			} else {
				sendMessage({"command": "addToLibrary", "songId": songId});
			}
		});
		$('#addToFavoritesBtn').click(function(){
			if ($('#addToFavoritesBtn').hasClass('selected')) {
				sendMessage({"command": "removeFromSongFavorites", "songId": songId});
			} else {
				sendMessage({"command": "addToSongFavorites", "songId": songId});
			}
		});
		$('#radioSmileBtn').click(function(){
			sendMessage({"command": "toggleSmile"});
		});
		$('#radioFrownBtn').click(function(){
			sendMessage({"command": "toggleFrown"});
		});
		$('#songDetails a').click(function(e){
			sendMessage({"command":"openGSTab", "url": $(this).attr('href')});
		    e.preventDefault();
		    return false;
		});
		
		// Add Search form handler
		$('#search_form').submit(function(){ 
			sendMessage({"command":"openGSTab", "url":"#/search/all?q=" + $('#searchBox').val()});
			sendMessage({"command":"performSearch", "query": $('#searchBox').val()});
		    	$('#searchBox').val(''); $('#searchBox').blur(); return false; 
		});
		
		// Hide/show elements based on settings
		getSetting("showSearchBox",function(showSearchBox) {
            $('#search').toggleClass('hidden',!showSearchBox);
        });
        getSetting("showQueueButtons",function(showQueueButtons) {
            $('#player_controls_right').toggleClass('hidden',!showQueueButtons);
        });
        getSetting("showPlaybackButtons",function(showPlaybackButtons) {
            $('#player_controls_playback').toggleClass('hidden',!showPlaybackButtons);
        });
        getSetting("showAlbumArt",function(showAlbumArt) {
            $('body').toggleClass('noAlbumArt',!showAlbumArt);
        });
        
        // Volume Control effects
        getSetting("showVolumeControlOnHover",function(showVolumeControlOnHover) {
            if(showVolumeControlOnHover) loadVolumeEffects();
        });
        
        // Set up volume slider
        $("#volumeSlider").slider({
            orientation: "horizontal",
            range: "min",
            min: 0,
            max: 100,
            slide: volumeUpdate,
            change: volumeUpdate
        });
	});
	
	chrome.extension.onRequest.addListener(
		function(request, sender, sendResponse) {
			if (debug && (debugStatusUpdate || request.command != 'statusUpdate')) console.log("sharkzapper:","<<<",request.command,request,sender);
			if (!request.command) return;
			if (tabId && sender.tab && sender.tab.id != tabId) return; //stop multiple tabs sending us updates
			switch (request.command) {
				case 'popupUpdate':
				    if($('body').hasClass('notification') && request.includeNotification != true) return;
				    if (request.closeImmediately) window.close();
					if (request.enabled) {
						$('button').removeAttr('disabled');
						$('button').removeClass('disabled');
						$('body').removeClass('notPlaying');
					} else {
						$('button').addClass('disabled');
						$('body').addClass('notPlaying');
						$('button').attr('disabled','disabled');
						$('#player_play_pause').removeClass('pause');
					}
					if (request.pinnedPopupOpen) {
					    $('#pin').addClass('hidden');
                        $('#settingsBtn').addClass('noPin');
                    }
					if (request.tabId) tabId = request.tabId;
					break;
				case 'statusUpdate':
					if (request.currentSong) {
					    $('button').removeAttr('disabled');
						$('button').removeClass('disabled');
					
						$('#songName').text(request.currentSong.SongName);
						$('#albumName').text(request.currentSong.AlbumName);
						$('#artistName').text(request.currentSong.ArtistName);
						if (request.urls) {
						    $('#songName').attr('href', request.urls.song);
						    $('#albumName').attr('href', request.urls.album);
						    $('#artistName').attr('href', request.urls.artist);
						} else {
    						$('#songName, #albumName, #artistName').removeAttr('href');
						}
						$('#albumart').attr('alt', request.currentSong.AlbumName);
						$('#player_elapsed').text(Math.floor(request.playbackStatus.position / 1000 / 60) + ":" + ((request.playbackStatus.position / 1000) % 60).toFixed().pad(2, "0"));
						$('#player_duration').text(Math.floor(request.playbackStatus.duration / 1000 / 60) + ":" + ((request.playbackStatus.duration / 1000) % 60).toFixed().pad(2, "0"));
						if (request.currentSong.CoverArtFilename) {
							$('#albumart').attr('src', request.currentSong.artPath + 'm' + request.currentSong.CoverArtFilename);
						} else {
							$('#albumart').attr('src', defaultAlbumArtUrl);
						}
						if (request.currentSong.fromLibrary) {
							$('#addToLibraryBtn').addClass('selected');
						} else {
							$('#addToLibraryBtn').removeClass('selected');
						}
						if (request.currentSong.isFavorite) {
							$('#addToFavoritesBtn').addClass('selected');
						} else {
							$('#addToFavoritesBtn').removeClass('selected');
						}
						
						$('#player_shuffle').toggleClass('active',Boolean(request.shuffle));
						$('#player_crossfade').toggleClass('active',Boolean(request.crossfade));
						$('#player_loop').toggleClass('active',Boolean(request.repeat));
						$('#player_loop').toggleClass('one',(repeatMap[request.repeat] == 'REPEAT_ONE'));
						
						$('#player_play_pause').removeAttr('disabled');
						$('#player_play_pause').removeClass('disabled');
						$('#albumart').removeClass('hidden');
						$('#songDetails').removeClass('hidden');
					    getSetting("showMuteButton",function(showMuteButton) {
                            $('#player_volume').toggleClass('hidden',!showMuteButton);
                        });
						$('#playerDetails_nowPlaying').removeClass('hidden');
						$('body').removeClass('notPlaying');
						
						songId = request.currentSong.SongID;
					} else { 
						songId = null;
						$('#songName').text('');
						$('#albumName').text('');
						$('#artistName').text('');
						$('#player_elapsed').text('');
						$('#player_duration').text('');
						$('#player_play_pause').attr('disabled','disabled');
						$('#player_play_pause').addClass('disabled');
						$('#albumart').addClass('hidden');
						$('#songDetails').addClass('hidden');
						$('#player_volume').addClass('hidden');
						$('#playerDetails_nowPlaying').addClass('hidden');
						$('body').addClass('notPlaying');
					}
					if (request.prevSong) {
						$('#player_previous').removeClass('disabled');						
						$('#player_previous').removeAttr('disabled');
					} else {
						$('#player_previous').addClass('disabled');	
						$('#player_previous').attr('disabled','disabled');
					}
					$('#player_play_pause').toggleClass('pause',!request.isPaused && request.isPlaying); //inverse logic
					$('#player_play_pause, body').toggleClass('paused',request.isPaused);
					$('#player_play_pause, body').toggleClass('playing',request.isPlaying);

                    if (!(request.playbackStatus && request.playbackStatus.activeSong && request.playbackStatus.activeSong.queueSongID && request.queueLength)) {
                        $('#queue_position').addClass('hidden');
                    } else {
                        getSetting("showQueuePosition",function(showQueuePosition) {
                            $('#queue_position').toggleClass('hidden',!showQueuePosition);
                        });
                    }
				    if (request.playbackStatus) {
				        var status = statusMap[request.playbackStatus.status];
		                if (debug) console.log("status:",status);
                        if (status == 'PLAY_STATUS_LOADING' || status == 'PLAY_STATUS_BUFFERING') {
                            $('#player_play_pause').addClass('buffering').removeClass('pause');
                            $('#bufferinglogo').removeClass('hidden');
                        } else {
                            $('#player_play_pause').removeClass('buffering');
                            $('#bufferinglogo').addClass('hidden');
                        }
                        if (status == 'PLAY_STATUS_COMPLETED' && request.playbackStatus.activeSong && request.playbackStatus.activeSong.queueSongID  && request.queueLength && request.playbackStatus.activeSong.queueSongID == request.queueLength) {
                            $('body').addClass('notPlaying');
                        }
                        if (request.playbackStatus.activeSong && request.playbackStatus.activeSong.queueSongID  && request.queueLength) {
    						$('#queue_current_position').text(request.playbackStatus.activeSong.queueSongID);
    						$('#queue_total').text(request.queueLength);
						} 
				    }
					if (request.nextSong) {
						$('#player_next').removeClass('disabled');						
						$('#player_next').removeAttr('disabled');
					} else {
						$('#player_next').addClass('disabled');
						$('#player_next').attr('disabled','disabled');
					}
					if (request.isMuted) {
						$('#player_volume').addClass('mute');
					} else {
						$('#player_volume').removeClass('mute');
					}
					$('#playerDetails_nowPlaying').toggleClass('radioOn',request.isRadio);
					if (request.isRadio) {
						$('#radioSmileBtn').toggleClass('selected',request.isSmile);
						$('#radioFrownBtn').toggleClass('selected',request.isFrown);	
					}
					if (request.volume != lastVolume) {
					    $("#volumeSlider").slider("option","value",request.volume);
					}
					lastVolume = request.volume;
					break;
				case 'settingsUpdate':
				    if (!request.settings) return;		        
			        $('#search').toggleClass('hidden',!request.settings.showSearchBox);
			        if(request.settings.showVolumeControlOnHover) {
    			        loadVolumeEffects();
			        } else {
			            $('#volumeControl').hide();
			            $("#player_volume,#volumeControl").unbind('mouseenter').unbind('mouseleave');
			        }
			        $('#player_controls_right').toggleClass('hidden',!request.settings.showQueueButtons);
			        $('#player_controls_playback').toggleClass('hidden',!request.settings.showPlaybackButtons);
			        $('body').toggleClass('noAlbumArt',!request.settings.showAlbumArt);
			        break;
			}		
		}
	);	

	sendMessage({"command": "popupInit"});
	</script>
</head>
<body>
	<div id="header">
		<a id="grooveshark" title="Open Grooveshark">
			<span>Grooveshark</span>
		</a>
		<a id="settingsBtn" title="Open sharkZapper settings"></a>
		<a id="pin" title="Pin this window to bottom corner"></a>
	</div>
	<div id="bufferinglogo" class="hidden"></div>
	<div id="thumbnail">
	    <div id="player_controls_right">
    	    <button id="player_shuffle" disabled="disabled" class="player_control" title="Shuffle Songs"></button>
    	    <button id="player_loop" disabled="disabled" class="player_control" title="Loop Songs"></button>
    	    <button id="player_crossfade" disabled="disabled" class="player_control" title="Crossfade Between Songs"></button>
	    </div>
	    <div id="queue_position" class="hidden">
	        <span id="queue_current_position"></span>
	        <span id="queue_position_separator">/</span>
	        <span id="queue_total"></span>
	    </div>
		<img id="albumart" alt="Album Art" class="hidden" src="http://static.a.gs-cdn.net/webincludes/images/default/album_100.png" />
		<div id="player_controls_playback">
			<button id="player_previous" disabled="disabled" class="player_control" title="Previous"></button>
			<button id="player_play_pause" disabled="disabled" class="player_control" title="Play/Pause"></button>
			<button id="player_next" disabled="disabled" class="player_control" title="Next"></button>
		</div>
	</div>
	<div id="songDetails" class="hidden">
		<div class="scrollable"><a id="songName"></a></div>
		<div class="scrollable"><a id="albumName"></a></div>
		<div class="scrollable"><a id="artistName"></a></div>
		<div id="player_times"><span id="player_elapsed"></span><span id="player_duration"></span></div>
	</div>
	<div id="lowerControls">
		<div id="playerDetails_nowPlaying" class="hidden">
			<a class="btn btn_style1 icon add"  title="Add to My Music" id="addToLibraryBtn"></a>
			<a class="btn btn_style1 icon favorite" title="Add to Favorites" id="addToFavoritesBtn"></a>
			<a class="btn btn_style1 radio_btn icon smile" title="Smile" id="radioSmileBtn"></a>
			<a class="btn btn_style1 radio_btn icon frown" title="Frown" id="radioFrownBtn"></a>
		</div>
		<div id="volumeControl">
		    <div id="volumeSlider">
		    </div>
		</div>
		<div class="fltrht"><button id="player_volume" class="player_control hidden" title="Volume Mute"></button></div>
		<div id="search">
			<form id="search_form">
			<input type="search" id="searchBox" placeholder="Search for a song" />
			</form>
		</div>
	</div>
</body>
</html>
