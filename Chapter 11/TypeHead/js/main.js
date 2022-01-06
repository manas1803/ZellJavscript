// List of countries.
// Scroll past this list to code.
const countries = [
  { name: 'Afghanistan' },
  { name: 'Aland Islands' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'American Samoa' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Anguilla' },
  { name: 'Antarctica' },
  { name: 'Antigua and Barbuda' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Aruba' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaijan' },
  { name: 'Bahamas' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belarus' },
  { name: 'Belgium' },
  { name: 'Belize' },
  { name: 'Benin' },
  { name: 'Bermuda' },
  { name: 'Bhutan' },
  { name: 'Bolivia' },
  { name: 'Bonaire, Sint Eustatius and Saba' },
  { name: 'Bosnia and Herzegovina' },
  { name: 'Botswana' },
  { name: 'Bouvet Island' },
  { name: 'Brazil' },
  { name: 'British Indian Ocean Territory' },
  { name: 'United States Minor Outlying Islands' },
  { name: 'Virgin Islands (British)' },
  { name: 'Virgin Islands (U.S.)' },
  { name: 'Brunei Darussalam' },
  { name: 'Bulgaria' },
  { name: 'Burkina Faso' },
  { name: 'Burundi' },
  { name: 'Cambodia' },
  { name: 'Cameroon' },
  { name: 'Canada' },
  { name: 'Cabo Verde' },
  { name: 'Cayman Islands' },
  { name: 'Central African Republic' },
  { name: 'Chad' },
  { name: 'Chile' },
  { name: 'China' },
  { name: 'Christmas Island' },
  { name: 'Cocos (Keeling) Islands' },
  { name: 'Colombia' },
  { name: 'Comoros' },
  { name: 'Congo' },
  { name: 'Congo (Democratic Republic of the)' },
  { name: 'Cook Islands' },
  { name: 'Costa Rica' },
  { name: 'Croatia' },
  { name: 'Cuba' },
  { name: 'Curaçao' },
  { name: 'Cyprus' },
  { name: 'Czech Republic' },
  { name: 'Denmark' },
  { name: 'Djibouti' },
  { name: 'Dominica' },
  { name: 'Dominican Republic' },
  { name: 'Ecuador' },
  { name: 'Egypt' },
  { name: 'El Salvador' },
  { name: 'Equatorial Guinea' },
  { name: 'Eritrea' },
  { name: 'Estonia' },
  { name: 'Ethiopia' },
  { name: 'Falkland Islands (Malvinas)' },
  { name: 'Faroe Islands' },
  { name: 'Fiji' },
  { name: 'Finland' },
  { name: 'France' },
  { name: 'French Guiana' },
  { name: 'French Polynesia' },
  { name: 'French Southern Territories' },
  { name: 'Gabon' },
  { name: 'Gambia' },
  { name: 'Georgia' },
  { name: 'Germany' },
  { name: 'Ghana' },
  { name: 'Gibraltar' },
  { name: 'Greece' },
  { name: 'Greenland' },
  { name: 'Grenada' },
  { name: 'Guadeloupe' },
  { name: 'Guam' },
  { name: 'Guatemala' },
  { name: 'Guernsey' },
  { name: 'Guinea' },
  { name: 'Guinea-Bissau' },
  { name: 'Guyana' },
  { name: 'Haiti' },
  { name: 'Heard Island and McDonald Islands' },
  { name: 'Holy See' },
  { name: 'Honduras' },
  { name: 'Hong Kong' },
  { name: 'Hungary' },
  { name: 'Iceland' },
  { name: 'India' },
  { name: 'Indonesia' },
  { name: "Côte d'Ivoire" },
  { name: 'Iran (Islamic Republic of)' },
  { name: 'Iraq' },
  { name: 'Ireland' },
  { name: 'Isle of Man' },
  { name: 'Israel' },
  { name: 'Italy' },
  { name: 'Jamaica' },
  { name: 'Japan' },
  { name: 'Jersey' },
  { name: 'Jordan' },
  { name: 'Kazakhstan' },
  { name: 'Kenya' },
  { name: 'Kiribati' },
  { name: 'Kuwait' },
  { name: 'Kyrgyzstan' },
  { name: "Lao People's Democratic Republic" },
  { name: 'Latvia' },
  { name: 'Lebanon' },
  { name: 'Lesotho' },
  { name: 'Liberia' },
  { name: 'Libya' },
  { name: 'Liechtenstein' },
  { name: 'Lithuania' },
  { name: 'Luxembourg' },
  { name: 'Macao' },
  { name: 'Macedonia (the former Yugoslav Republic of)' },
  { name: 'Madagascar' },
  { name: 'Malawi' },
  { name: 'Malaysia' },
  { name: 'Maldives' },
  { name: 'Mali' },
  { name: 'Malta' },
  { name: 'Marshall Islands' },
  { name: 'Martinique' },
  { name: 'Mauritania' },
  { name: 'Mauritius' },
  { name: 'Mayotte' },
  { name: 'Mexico' },
  { name: 'Micronesia (Federated States of)' },
  { name: 'Moldova (Republic of)' },
  { name: 'Monaco' },
  { name: 'Mongolia' },
  { name: 'Montenegro' },
  { name: 'Montserrat' },
  { name: 'Morocco' },
  { name: 'Mozambique' },
  { name: 'Myanmar' },
  { name: 'Namibia' },
  { name: 'Nauru' },
  { name: 'Nepal' },
  { name: 'Netherlands' },
  { name: 'New Caledonia' },
  { name: 'New Zealand' },
  { name: 'Nicaragua' },
  { name: 'Niger' },
  { name: 'Nigeria' },
  { name: 'Niue' },
  { name: 'Norfolk Island' },
  { name: 'North Korea' },
  { name: 'Northern Mariana Islands' },
  { name: 'Norway' },
  { name: 'Oman' },
  { name: 'Pakistan' },
  { name: 'Palau' },
  { name: 'Palestine, State of' },
  { name: 'Panama' },
  { name: 'Papua New Guinea' },
  { name: 'Paraguay' },
  { name: 'Peru' },
  { name: 'Philippines' },
  { name: 'Pitcairn' },
  { name: 'Poland' },
  { name: 'Portugal' },
  { name: 'Puerto Rico' },
  { name: 'Qatar' },
  { name: 'Republic of Kosovo' },
  { name: 'Réunion' },
  { name: 'Romania' },
  { name: 'Russian Federation' },
  { name: 'Rwanda' },
  { name: 'Saint Barthélemy' },
  { name: 'Saint Helena, Ascension and Tristan da Cunha' },
  { name: 'Saint Kitts and Nevis' },
  { name: 'Saint Lucia' },
  { name: 'Saint Martin (French part)' },
  { name: 'Saint Pierre and Miquelon' },
  { name: 'Saint Vincent and the Grenadines' },
  { name: 'Samoa' },
  { name: 'San Marino' },
  { name: 'Sao Tome and Principe' },
  { name: 'Saudi Arabia' },
  { name: 'Senegal' },
  { name: 'Serbia' },
  { name: 'Seychelles' },
  { name: 'Sierra Leone' },
  { name: 'Singapore' },
  { name: 'Sint Maarten' },
  { name: 'Slovakia' },
  { name: 'Slovenia' },
  { name: 'Solomon Islands' },
  { name: 'Somalia' },
  { name: 'South Africa' },
  { name: 'South Georgia and the South Sandwich Islands' },
  { name: 'South Korea' },
  { name: 'South Sudan' },
  { name: 'Spain' },
  { name: 'Sri Lanka' },
  { name: 'Sudan' },
  { name: 'Suriname' },
  { name: 'Svalbard and Jan Mayen' },
  { name: 'Swaziland' },
  { name: 'Sweden' },
  { name: 'Switzerland' },
  { name: 'Syrian Arab Republic' },
  { name: 'Taiwan' },
  { name: 'Tajikistan' },
  { name: 'Tanzania, United Republic of' },
  { name: 'Thailand' },
  { name: 'Timor-Leste' },
  { name: 'Togo' },
  { name: 'Tokelau' },
  { name: 'Tonga' },
  { name: 'Trinidad and Tobago' },
  { name: 'Tunisia' },
  { name: 'Turkey' },
  { name: 'Turkmenistan' },
  { name: 'Turks and Caicos Islands' },
  { name: 'Tuvalu' },
  { name: 'Uganda' },
  { name: 'Ukraine' },
  { name: 'United Arab Emirates' },
  { name: 'United Kingdom' },
  { name: 'United States' },
  { name: 'Uruguay' },
  { name: 'Uzbekistan' },
  { name: 'Vanuatu' },
  { name: 'Venezuela' },
  { name: 'Vietnam' },
  { name: 'Wallis and Futuna' },
  { name: 'Western Sahara' },
  { name: 'Yemen' },
  { name: 'Zambia' },
  { name: 'Zimbabwe' }
]
const typeahead = document.querySelector(".typeahead")
const inputCountry = typeahead.querySelector("input")
const countriesListContainer = typeahead.querySelector("ul")

/**
 * 
 * @param {*} string 
 * @param {*} searchTerms 
 * @returns 
 */
 const boldSearchItems = (string,searchTerms) =>{
  const length = searchTerms.length
  const toBold = string.substring(0,length)
  const restOfString = string.substring(length)

  return `<strong>${toBold}</strong>${restOfString}`
}


/**
 * Creating HTML list
 * @param {Array} countries List of filtered countries 
 * @returns {HTMLDocumentFragment} HTML fragment containing list of countries
 */

const createList = (countries,inputValue) => {
  const fragment = document.createDocumentFragment();
  countries.forEach(country => {
    const countryList = document.createElement("li")
    countryList.innerHTML = DOMPurify.sanitize(boldSearchItems(country.name,inputValue))
    fragment.appendChild(countryList);
  });
  return fragment
}

/**
 * To filter the array of countries
 * @param {Array} countries 
 * @returns {Array} Array of filtered countries
 */
const getFilteredCountries = (inputValue)=>{
  return countries.filter((country) => {
    const name = country.name.toLowerCase()
    return name.startsWith(inputValue)
  })
}

inputCountry.addEventListener("input", (e) => {
  const inputValue = e.currentTarget.value.trim().toLowerCase();
  if (!inputValue) return countriesListContainer.setAttribute('hidden', true)

  // Each time clearing the list
  countriesListContainer.innerHTML = DOMPurify.sanitize('')

  const filteredCountries = getFilteredCountries(inputValue)

  const countriesListFragment = createList(filteredCountries,inputValue)

  countriesListContainer.appendChild(countriesListFragment)
  countriesListContainer.removeAttribute("hidden")
})

document.addEventListener("click", (e) => {
  if (e.target.closest(".typeahead")) return
  countriesListContainer.setAttribute("hidden", true)
})

countriesListContainer.addEventListener("click",(event)=>{
  if(!event.target.closest("li")) return
  const li = event.target 
  const countryName = li.textContent
  inputCountry.value = countryName
  countriesListContainer.setAttribute("hidden", true)
})
