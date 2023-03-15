/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving
the order of characters. No two characters may map to the same character, but a character may map to itself.

Input: s = "paper", t = "title"
Output: true

Input: s = "foo", t = "bar"
Output: false
 */

// ZORLUK SEVIYESI - EASY

//Time Complexity : O(N)  78.55% - Space Comp : O(N) - 61.85%
//ChatGpt Kodu
function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i])) {
            if (mapS.get(s[i]) !== t[i]) return false;
        } else {
            if (mapT.has(t[i])) return false;
            mapS.set(s[i], t[i]);
            mapT.set(t[i], s[i]);
        }
    }
    return true;
}

//ChatGpt 2. Kod
//Time Complexity O(N)  69.8% - Space Com : O(1) 88.73%
//Hafiza konusunda usttekinden daha iyi. Ama ustteki kod implement etmesi ve anlamasi daha kolay.
function isIsomorphic2(s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Array(256).fill(-1);
    const mapT = new Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        if (mapS[s.charCodeAt(i)] !== -1) {
            if (mapS[s.charCodeAt(i)] !== t.charCodeAt(i)) return false;
        } else {
            if (mapT[t.charCodeAt(i)] !== -1) return false;
            mapS[s.charCodeAt(i)] = t.charCodeAt(i);
            mapT[t.charCodeAt(i)] = s.charCodeAt(i);
        }
    }
    return true;
}

//LeetCode En hizli kod
// Time Comp: O(N*2) Hiz : 99.2% -Space Comp: O(1) Hafiza : 96.50%
//Cahtgptye gore diger 2 kod bundan daha iyi cunku bunun time comp o(n*2)
//ama LeetCode en hizli ve hafizasi baya iyi. Sanirim kucuk stringlerde daha efektif calisiyor
//ama ustteki kod buyuk stringler icin efektif calisiyor
function isIsomorphic3 (s, t) {
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false;
        }
    }

    return true;
}

console.log(isIsomorphic2('foo','bar'));