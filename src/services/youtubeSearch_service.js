// Service methods for interacting with the YoutubeAPI using the JSONP library

import JSONP from 'jsonp';

const API_KEY = 'AIzaSyAUMMuY_TN3D1bQRxhBDw-TgqUZU8tKkkM';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

 // For some reason passing json obj as param not working with JSONP use the url notation
  //JSONP(google_videoStatistics_url, {'key':API_KEY,'id':videoId}, callbackMethod);

export function getVideoStatistics(videoId, callbackMethod) {
 
  let google_videoStatistics_url = BASE_URL+'videos?part=statistics';
  google_videoStatistics_url = google_videoStatistics_url+"&key="+API_KEY+"&id="+videoId;

  JSONP(google_videoStatistics_url, callbackMethod);

}


export function doVideoSearch(searchObject , callbackMethod){

	let google_generalSearch_url = BASE_URL+'search?part=snippet&type=video&maxResults=10';
	google_generalSearch_url = google_generalSearch_url+"&key="+API_KEY;

	if(searchObject.term) google_generalSearch_url = google_generalSearch_url+"&q="+searchObject.term;
	if(searchObject.category) google_generalSearch_url = google_generalSearch_url+"&videoCategoryId="+searchObject.category;
	if(searchObject.year) {
			let afterYear = searchObject.year+"-01-01T00:00:01Z";
			let beforeYear = searchObject.year+"-12-31T00:00:01Z";
			google_generalSearch_url = google_generalSearch_url+"&publishedAfter="+afterYear+"&publishedBefore="+beforeYear;
	}

	console.log(google_generalSearch_url);

	JSONP(google_generalSearch_url, callbackMethod);
}


export function getAutoSuggestions(input,callbackMethod){
	let google_Autosuggest_url = '//suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=';
	const inputValue = input.trim().toLowerCase();
	google_Autosuggest_url = google_Autosuggest_url+inputValue;

	JSONP(google_Autosuggest_url, callbackMethod);

}


export function getCategoryList(callbackMethod){
	let google_categoriesList_url = BASE_URL+'videoCategories?part=snippet&regionCode=au';
	google_categoriesList_url = google_categoriesList_url+"&key="+API_KEY;

	
	JSONP(google_categoriesList_url, callbackMethod);
}


