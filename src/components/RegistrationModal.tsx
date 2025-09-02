import React, { useState, useEffect, useRef } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '+1'
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [validFields, setValidFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  });

  const [selectedCountry, setSelectedCountry] = useState({
    code: 'US',
    dialCode: '+1',
    flag: '🇺🇸'
  });

  const countries = [
    { code: 'AD', dialCode: '+376', flag: '🇦🇩', name: 'Andorra' },
    { code: 'AE', dialCode: '+971', flag: '🇦🇪', name: 'UAE' },
    { code: 'AF', dialCode: '+93', flag: '🇦🇫', name: 'Afghanistan' },
    { code: 'AG', dialCode: '+1268', flag: '🇦🇬', name: 'Antigua and Barbuda' },
    { code: 'AI', dialCode: '+1264', flag: '🇦🇮', name: 'Anguilla' },
    { code: 'AL', dialCode: '+355', flag: '🇦🇱', name: 'Albania' },
    { code: 'AM', dialCode: '+374', flag: '🇦🇲', name: 'Armenia' },
    { code: 'AO', dialCode: '+244', flag: '🇦🇴', name: 'Angola' },
    { code: 'AR', dialCode: '+54', flag: '🇦🇷', name: 'Argentina' },
    { code: 'AS', dialCode: '+1684', flag: '🇦🇸', name: 'American Samoa' },
    { code: 'AT', dialCode: '+43', flag: '🇦🇹', name: 'Austria' },
    { code: 'AU', dialCode: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: 'AW', dialCode: '+297', flag: '🇦🇼', name: 'Aruba' },
    { code: 'AZ', dialCode: '+994', flag: '🇦🇿', name: 'Azerbaijan' },
    { code: 'BA', dialCode: '+387', flag: '🇧🇦', name: 'Bosnia and Herzegovina' },
    { code: 'BB', dialCode: '+1246', flag: '🇧🇧', name: 'Barbados' },
    { code: 'BD', dialCode: '+880', flag: '🇧🇩', name: 'Bangladesh' },
    { code: 'BE', dialCode: '+32', flag: '🇧🇪', name: 'Belgium' },
    { code: 'BF', dialCode: '+226', flag: '🇧🇫', name: 'Burkina Faso' },
    { code: 'BG', dialCode: '+359', flag: '🇧🇬', name: 'Bulgaria' },
    { code: 'BH', dialCode: '+973', flag: '🇧🇭', name: 'Bahrain' },
    { code: 'BI', dialCode: '+257', flag: '🇧🇮', name: 'Burundi' },
    { code: 'BJ', dialCode: '+229', flag: '🇧🇯', name: 'Benin' },
    { code: 'BM', dialCode: '+1441', flag: '🇧🇲', name: 'Bermuda' },
    { code: 'BN', dialCode: '+673', flag: '🇧🇳', name: 'Brunei' },
    { code: 'BO', dialCode: '+591', flag: '🇧🇴', name: 'Bolivia' },
    { code: 'BR', dialCode: '+55', flag: '🇧🇷', name: 'Brazil' },
    { code: 'BS', dialCode: '+1242', flag: '🇧🇸', name: 'Bahamas' },
    { code: 'BT', dialCode: '+975', flag: '🇧🇹', name: 'Bhutan' },
    { code: 'BW', dialCode: '+267', flag: '🇧🇼', name: 'Botswana' },
    { code: 'BY', dialCode: '+375', flag: '🇧🇾', name: 'Belarus' },
    { code: 'BZ', dialCode: '+501', flag: '🇧🇿', name: 'Belize' },
    { code: 'CA', dialCode: '+1', flag: '🇨🇦', name: 'Canada' },
    { code: 'CD', dialCode: '+243', flag: '🇨🇩', name: 'DR Congo' },
    { code: 'CF', dialCode: '+236', flag: '🇨🇫', name: 'Central African Republic' },
    { code: 'CG', dialCode: '+242', flag: '🇨🇬', name: 'Congo' },
    { code: 'CH', dialCode: '+41', flag: '🇨🇭', name: 'Switzerland' },
    { code: 'CI', dialCode: '+225', flag: '🇨🇮', name: 'Côte d\'Ivoire' },
    { code: 'CK', dialCode: '+682', flag: '🇨🇰', name: 'Cook Islands' },
    { code: 'CL', dialCode: '+56', flag: '🇨🇱', name: 'Chile' },
    { code: 'CM', dialCode: '+237', flag: '🇨🇲', name: 'Cameroon' },
    { code: 'CN', dialCode: '+86', flag: '🇨🇳', name: 'China' },
    { code: 'CO', dialCode: '+57', flag: '🇨🇴', name: 'Colombia' },
    { code: 'CR', dialCode: '+506', flag: '🇨🇷', name: 'Costa Rica' },
    { code: 'CU', dialCode: '+53', flag: '🇨🇺', name: 'Cuba' },
    { code: 'CV', dialCode: '+238', flag: '🇨🇻', name: 'Cape Verde' },
    { code: 'CY', dialCode: '+357', flag: '🇨🇾', name: 'Cyprus' },
    { code: 'CZ', dialCode: '+420', flag: '🇨🇿', name: 'Czech Republic' },
    { code: 'DE', dialCode: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: 'DJ', dialCode: '+253', flag: '🇩🇯', name: 'Djibouti' },
    { code: 'DK', dialCode: '+45', flag: '🇩🇰', name: 'Denmark' },
    { code: 'DM', dialCode: '+1767', flag: '🇩🇲', name: 'Dominica' },
    { code: 'DO', dialCode: '+1', flag: '🇩🇴', name: 'Dominican Republic' },
    { code: 'DZ', dialCode: '+213', flag: '🇩🇿', name: 'Algeria' },
    { code: 'EC', dialCode: '+593', flag: '🇪🇨', name: 'Ecuador' },
    { code: 'EE', dialCode: '+372', flag: '🇪🇪', name: 'Estonia' },
    { code: 'EG', dialCode: '+20', flag: '🇪🇬', name: 'Egypt' },
    { code: 'ER', dialCode: '+291', flag: '🇪🇷', name: 'Eritrea' },
    { code: 'ES', dialCode: '+34', flag: '🇪🇸', name: 'Spain' },
    { code: 'ET', dialCode: '+251', flag: '🇪🇹', name: 'Ethiopia' },
    { code: 'FI', dialCode: '+358', flag: '🇫🇮', name: 'Finland' },
    { code: 'FJ', dialCode: '+679', flag: '🇫🇯', name: 'Fiji' },
    { code: 'FK', dialCode: '+500', flag: '🇫🇰', name: 'Falkland Islands' },
    { code: 'FM', dialCode: '+691', flag: '🇫🇲', name: 'Micronesia' },
    { code: 'FO', dialCode: '+298', flag: '🇫🇴', name: 'Faroe Islands' },
    { code: 'FR', dialCode: '+33', flag: '🇫🇷', name: 'France' },
    { code: 'GA', dialCode: '+241', flag: '🇬🇦', name: 'Gabon' },
    { code: 'GB', dialCode: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: 'GD', dialCode: '+1473', flag: '🇬🇩', name: 'Grenada' },
    { code: 'GE', dialCode: '+995', flag: '🇬🇪', name: 'Georgia' },
    { code: 'GF', dialCode: '+594', flag: '🇬🇫', name: 'French Guiana' },
    { code: 'GG', dialCode: '+44', flag: '🇬🇬', name: 'Guernsey' },
    { code: 'GH', dialCode: '+233', flag: '🇬🇭', name: 'Ghana' },
    { code: 'GI', dialCode: '+350', flag: '🇬🇮', name: 'Gibraltar' },
    { code: 'GL', dialCode: '+299', flag: '🇬🇱', name: 'Greenland' },
    { code: 'GM', dialCode: '+220', flag: '🇬🇲', name: 'Gambia' },
    { code: 'GN', dialCode: '+224', flag: '🇬🇳', name: 'Guinea' },
    { code: 'GP', dialCode: '+590', flag: '🇬🇵', name: 'Guadeloupe' },
    { code: 'GQ', dialCode: '+240', flag: '🇬🇶', name: 'Equatorial Guinea' },
    { code: 'GR', dialCode: '+30', flag: '🇬🇷', name: 'Greece' },
    { code: 'GT', dialCode: '+502', flag: '🇬🇹', name: 'Guatemala' },
    { code: 'GU', dialCode: '+1671', flag: '🇬🇺', name: 'Guam' },
    { code: 'GW', dialCode: '+245', flag: '🇬🇼', name: 'Guinea-Bissau' },
    { code: 'GY', dialCode: '+592', flag: '🇬🇾', name: 'Guyana' },
    { code: 'HK', dialCode: '+852', flag: '🇭🇰', name: 'Hong Kong' },
    { code: 'HN', dialCode: '+504', flag: '🇭🇳', name: 'Honduras' },
    { code: 'HR', dialCode: '+385', flag: '🇭🇷', name: 'Croatia' },
    { code: 'HT', dialCode: '+509', flag: '🇭🇹', name: 'Haiti' },
    { code: 'HU', dialCode: '+36', flag: '🇭🇺', name: 'Hungary' },
    { code: 'ID', dialCode: '+62', flag: '🇮🇩', name: 'Indonesia' },
    { code: 'IE', dialCode: '+353', flag: '🇮🇪', name: 'Ireland' },
    { code: 'IL', dialCode: '+972', flag: '🇮🇱', name: 'Israel' },
    { code: 'IM', dialCode: '+44', flag: '🇮🇲', name: 'Isle of Man' },
    { code: 'IN', dialCode: '+91', flag: '🇮🇳', name: 'India' },
    { code: 'IO', dialCode: '+246', flag: '🇮🇴', name: 'British Indian Ocean Territory' },
    { code: 'IQ', dialCode: '+964', flag: '🇮🇶', name: 'Iraq' },
    { code: 'IR', dialCode: '+98', flag: '🇮🇷', name: 'Iran' },
    { code: 'IS', dialCode: '+354', flag: '🇮🇸', name: 'Iceland' },
    { code: 'IT', dialCode: '+39', flag: '🇮🇹', name: 'Italy' },
    { code: 'JE', dialCode: '+44', flag: '🇯🇪', name: 'Jersey' },
    { code: 'JM', dialCode: '+1876', flag: '🇯🇲', name: 'Jamaica' },
    { code: 'JO', dialCode: '+962', flag: '🇯🇴', name: 'Jordan' },
    { code: 'JP', dialCode: '+81', flag: '🇯🇵', name: 'Japan' },
    { code: 'KE', dialCode: '+254', flag: '🇰🇪', name: 'Kenya' },
    { code: 'KG', dialCode: '+996', flag: '🇰🇬', name: 'Kyrgyzstan' },
    { code: 'KH', dialCode: '+855', flag: '🇰🇭', name: 'Cambodia' },
    { code: 'KI', dialCode: '+686', flag: '🇰🇮', name: 'Kiribati' },
    { code: 'KM', dialCode: '+269', flag: '🇰🇲', name: 'Comoros' },
    { code: 'KN', dialCode: '+1869', flag: '🇰🇳', name: 'Saint Kitts and Nevis' },
    { code: 'KP', dialCode: '+850', flag: '🇰🇵', name: 'North Korea' },
    { code: 'KR', dialCode: '+82', flag: '🇰🇷', name: 'South Korea' },
    { code: 'KW', dialCode: '+965', flag: '🇰🇼', name: 'Kuwait' },
    { code: 'KY', dialCode: '+1345', flag: '🇰🇾', name: 'Cayman Islands' },
    { code: 'KZ', dialCode: '+7', flag: '🇰🇿', name: 'Kazakhstan' },
    { code: 'LA', dialCode: '+856', flag: '🇱🇦', name: 'Laos' },
    { code: 'LB', dialCode: '+961', flag: '🇱🇧', name: 'Lebanon' },
    { code: 'LC', dialCode: '+1758', flag: '🇱🇨', name: 'Saint Lucia' },
    { code: 'LI', dialCode: '+423', flag: '🇱🇮', name: 'Liechtenstein' },
    { code: 'LK', dialCode: '+94', flag: '🇱🇰', name: 'Sri Lanka' },
    { code: 'LR', dialCode: '+231', flag: '🇱🇷', name: 'Liberia' },
    { code: 'LS', dialCode: '+266', flag: '🇱🇸', name: 'Lesotho' },
    { code: 'LT', dialCode: '+370', flag: '🇱🇹', name: 'Lithuania' },
    { code: 'LU', dialCode: '+352', flag: '🇱🇺', name: 'Luxembourg' },
    { code: 'LV', dialCode: '+371', flag: '🇱🇻', name: 'Latvia' },
    { code: 'LY', dialCode: '+218', flag: '🇱🇾', name: 'Libya' },
    { code: 'MA', dialCode: '+212', flag: '🇲🇦', name: 'Morocco' },
    { code: 'MC', dialCode: '+377', flag: '🇲🇨', name: 'Monaco' },
    { code: 'MD', dialCode: '+373', flag: '🇲🇩', name: 'Moldova' },
    { code: 'ME', dialCode: '+382', flag: '🇲🇪', name: 'Montenegro' },
    { code: 'MF', dialCode: '+590', flag: '🇲🇫', name: 'Saint Martin' },
    { code: 'MG', dialCode: '+261', flag: '🇲🇬', name: 'Madagascar' },
    { code: 'MH', dialCode: '+692', flag: '🇲🇭', name: 'Marshall Islands' },
    { code: 'MK', dialCode: '+389', flag: '🇲🇰', name: 'North Macedonia' },
    { code: 'ML', dialCode: '+223', flag: '🇲🇱', name: 'Mali' },
    { code: 'MM', dialCode: '+95', flag: '🇲🇲', name: 'Myanmar' },
    { code: 'MN', dialCode: '+976', flag: '🇲🇳', name: 'Mongolia' },
    { code: 'MO', dialCode: '+853', flag: '🇲🇴', name: 'Macao' },
    { code: 'MP', dialCode: '+1670', flag: '🇲🇵', name: 'Northern Mariana Islands' },
    { code: 'MQ', dialCode: '+596', flag: '🇲🇶', name: 'Martinique' },
    { code: 'MR', dialCode: '+222', flag: '🇲🇷', name: 'Mauritania' },
    { code: 'MS', dialCode: '+1664', flag: '🇲🇸', name: 'Montserrat' },
    { code: 'MT', dialCode: '+356', flag: '🇲🇹', name: 'Malta' },
    { code: 'MU', dialCode: '+230', flag: '🇲🇺', name: 'Mauritius' },
    { code: 'MV', dialCode: '+960', flag: '🇲🇻', name: 'Maldives' },
    { code: 'MW', dialCode: '+265', flag: '🇲🇼', name: 'Malawi' },
    { code: 'MX', dialCode: '+52', flag: '🇲🇽', name: 'Mexico' },
    { code: 'MY', dialCode: '+60', flag: '🇲🇾', name: 'Malaysia' },
    { code: 'MZ', dialCode: '+258', flag: '🇲🇿', name: 'Mozambique' },
    { code: 'NA', dialCode: '+264', flag: '🇳🇦', name: 'Namibia' },
    { code: 'NC', dialCode: '+687', flag: '🇳🇨', name: 'New Caledonia' },
    { code: 'NE', dialCode: '+227', flag: '🇳🇪', name: 'Niger' },
    { code: 'NF', dialCode: '+672', flag: '🇳🇫', name: 'Norfolk Island' },
    { code: 'NG', dialCode: '+234', flag: '🇳🇬', name: 'Nigeria' },
    { code: 'NI', dialCode: '+505', flag: '🇳🇮', name: 'Nicaragua' },
    { code: 'NL', dialCode: '+31', flag: '🇳🇱', name: 'Netherlands' },
    { code: 'NO', dialCode: '+47', flag: '🇳🇴', name: 'Norway' },
    { code: 'NP', dialCode: '+977', flag: '🇳🇵', name: 'Nepal' },
    { code: 'NR', dialCode: '+674', flag: '🇳🇷', name: 'Nauru' },
    { code: 'NU', dialCode: '+683', flag: '🇳🇺', name: 'Niue' },
    { code: 'NZ', dialCode: '+64', flag: '🇳🇿', name: 'New Zealand' },
    { code: 'OM', dialCode: '+968', flag: '🇴🇲', name: 'Oman' },
    { code: 'PA', dialCode: '+507', flag: '🇵🇦', name: 'Panama' },
    { code: 'PE', dialCode: '+51', flag: '🇵🇪', name: 'Peru' },
    { code: 'PF', dialCode: '+689', flag: '🇵🇫', name: 'French Polynesia' },
    { code: 'PG', dialCode: '+675', flag: '🇵🇬', name: 'Papua New Guinea' },
    { code: 'PH', dialCode: '+63', flag: '🇵🇭', name: 'Philippines' },
    { code: 'PK', dialCode: '+92', flag: '🇵🇰', name: 'Pakistan' },
    { code: 'PL', dialCode: '+48', flag: '🇵🇱', name: 'Poland' },
    { code: 'PM', dialCode: '+508', flag: '🇵🇲', name: 'Saint Pierre and Miquelon' },
    { code: 'PR', dialCode: '+1', flag: '🇵🇷', name: 'Puerto Rico' },
    { code: 'PS', dialCode: '+970', flag: '🇵🇸', name: 'Palestine' },
    { code: 'PT', dialCode: '+351', flag: '🇵🇹', name: 'Portugal' },
    { code: 'PW', dialCode: '+680', flag: '🇵🇼', name: 'Palau' },
    { code: 'PY', dialCode: '+595', flag: '🇵🇾', name: 'Paraguay' },
    { code: 'QA', dialCode: '+974', flag: '🇶🇦', name: 'Qatar' },
    { code: 'RE', dialCode: '+262', flag: '🇷🇪', name: 'Reunion' },
    { code: 'RO', dialCode: '+40', flag: '🇷🇴', name: 'Romania' },
    { code: 'RS', dialCode: '+381', flag: '🇷🇸', name: 'Serbia' },
    { code: 'RU', dialCode: '+7', flag: '🇷🇺', name: 'Russia' },
    { code: 'RW', dialCode: '+250', flag: '🇷🇼', name: 'Rwanda' },
    { code: 'SA', dialCode: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
    { code: 'SB', dialCode: '+677', flag: '🇸🇧', name: 'Solomon Islands' },
    { code: 'SC', dialCode: '+248', flag: '🇸🇨', name: 'Seychelles' },
    { code: 'SD', dialCode: '+249', flag: '🇸🇩', name: 'Sudan' },
    { code: 'SE', dialCode: '+46', flag: '🇸🇪', name: 'Sweden' },
    { code: 'SG', dialCode: '+65', flag: '🇸🇬', name: 'Singapore' },
    { code: 'SH', dialCode: '+290', flag: '🇸🇭', name: 'Saint Helena' },
    { code: 'SI', dialCode: '+386', flag: '🇸🇮', name: 'Slovenia' },
    { code: 'SJ', dialCode: '+47', flag: '🇸🇯', name: 'Svalbard and Jan Mayen' },
    { code: 'SK', dialCode: '+421', flag: '🇸🇰', name: 'Slovakia' },
    { code: 'SL', dialCode: '+232', flag: '🇸🇱', name: 'Sierra Leone' },
    { code: 'SM', dialCode: '+378', flag: '🇸🇲', name: 'San Marino' },
    { code: 'SN', dialCode: '+221', flag: '🇸🇳', name: 'Senegal' },
    { code: 'SO', dialCode: '+252', flag: '🇸🇴', name: 'Somalia' },
    { code: 'SR', dialCode: '+597', flag: '🇸🇷', name: 'Suriname' },
    { code: 'SS', dialCode: '+211', flag: '🇸🇸', name: 'South Sudan' },
    { code: 'ST', dialCode: '+239', flag: '🇸🇹', name: 'Sao Tome and Principe' },
    { code: 'SV', dialCode: '+503', flag: '🇸🇻', name: 'El Salvador' },
    { code: 'SX', dialCode: '+1721', flag: '🇸🇽', name: 'Sint Maarten' },
    { code: 'SY', dialCode: '+963', flag: '🇸🇾', name: 'Syria' },
    { code: 'SZ', dialCode: '+268', flag: '🇸🇿', name: 'Eswatini' },
    { code: 'TC', dialCode: '+1649', flag: '🇹🇨', name: 'Turks and Caicos Islands' },
    { code: 'TD', dialCode: '+235', flag: '🇹🇩', name: 'Chad' },
    { code: 'TG', dialCode: '+228', flag: '🇹🇬', name: 'Togo' },
    { code: 'TH', dialCode: '+66', flag: '🇹🇭', name: 'Thailand' },
    { code: 'TJ', dialCode: '+992', flag: '🇹🇯', name: 'Tajikistan' },
    { code: 'TK', dialCode: '+690', flag: '🇹🇰', name: 'Tokelau' },
    { code: 'TL', dialCode: '+670', flag: '🇹🇱', name: 'Timor-Leste' },
    { code: 'TM', dialCode: '+993', flag: '🇹🇲', name: 'Turkmenistan' },
    { code: 'TN', dialCode: '+216', flag: '🇹🇳', name: 'Tunisia' },
    { code: 'TO', dialCode: '+676', flag: '🇹🇴', name: 'Tonga' },
    { code: 'TR', dialCode: '+90', flag: '🇹🇷', name: 'Turkey' },
    { code: 'TT', dialCode: '+1868', flag: '🇹🇹', name: 'Trinidad and Tobago' },
    { code: 'TV', dialCode: '+688', flag: '🇹🇻', name: 'Tuvalu' },
    { code: 'TW', dialCode: '+886', flag: '🇹🇼', name: 'Taiwan' },
    { code: 'TZ', dialCode: '+255', flag: '🇹🇿', name: 'Tanzania' },
    { code: 'UA', dialCode: '+380', flag: '🇺🇦', name: 'Ukraine' },
    { code: 'UG', dialCode: '+256', flag: '🇺🇬', name: 'Uganda' },
    { code: 'US', dialCode: '+1', flag: '🇺🇸', name: 'United States' },
    { code: 'UY', dialCode: '+598', flag: '🇺🇾', name: 'Uruguay' },
    { code: 'UZ', dialCode: '+998', flag: '🇺🇿', name: 'Uzbekistan' },
    { code: 'VA', dialCode: '+39', flag: '🇻🇦', name: 'Vatican City' },
    { code: 'VC', dialCode: '+1784', flag: '🇻🇨', name: 'Saint Vincent and the Grenadines' },
    { code: 'VE', dialCode: '+58', flag: '🇻🇪', name: 'Venezuela' },
    { code: 'VG', dialCode: '+1284', flag: '🇻🇬', name: 'British Virgin Islands' },
    { code: 'VI', dialCode: '+1340', flag: '🇻🇮', name: 'U.S. Virgin Islands' },
    { code: 'VN', dialCode: '+84', flag: '🇻🇳', name: 'Vietnam' },
    { code: 'VU', dialCode: '+678', flag: '🇻🇺', name: 'Vanuatu' },
    { code: 'WF', dialCode: '+681', flag: '🇼🇫', name: 'Wallis and Futuna' },
    { code: 'WS', dialCode: '+685', flag: '🇼🇸', name: 'Samoa' },
    { code: 'YE', dialCode: '+967', flag: '🇾🇪', name: 'Yemen' },
    { code: 'YT', dialCode: '+262', flag: '🇾🇹', name: 'Mayotte' },
    { code: 'ZA', dialCode: '+27', flag: '🇿🇦', name: 'South Africa' },
    { code: 'ZM', dialCode: '+260', flag: '🇿🇲', name: 'Zambia' },
    { code: 'ZW', dialCode: '+263', flag: '🇿🇼', name: 'Zimbabwe' }
  ];

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);
  const [pulseFields, setPulseFields] = useState<Record<string, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const countryButtonRef = useRef<HTMLButtonElement>(null);
  const portalDropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 256 });

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const isOutsideButton = countryButtonRef.current && !countryButtonRef.current.contains(target);
      const isOutsidePortal = portalDropdownRef.current && !portalDropdownRef.current.contains(target);
      
      if (isOutsideButton && isOutsidePortal) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCountryDropdown]);

  // Filter countries based on search
  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    country.dialCode.includes(countrySearch) ||
    country.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value.length < 2) return 'Must be at least 2 characters';
        if (!/^[a-zA-Z\s]+$/.test(value)) return 'Only letters and spaces allowed';
        return '';
      case 'email':
        if (!value) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        return '';
      case 'phone':
        if (!value) return 'Phone number is required';
        if (!/^\d+$/.test(value)) return 'Only numbers are allowed';
        if (value.length < 7 || value.length > 15) return 'Phone number must be 7-15 digits';
        return '';
      default:
        return '';
    }
  };

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 3) {
      return digits;
    } else if (digits.length <= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    } else if (digits.length <= 10) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    }
  };

  const getEmailSuggestions = (email: string) => {
    const commonDomains = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'icloud.com'];
    const atIndex = email.indexOf('@');
    
    if (atIndex === -1 || email.length <= atIndex + 1) {
      return [];
    }
    
    const username = email.slice(0, atIndex + 1);
    const domain = email.slice(atIndex + 1).toLowerCase();
    
    return commonDomains
      .filter(d => d.startsWith(domain) && d !== domain)
      .map(d => username + d)
      .slice(0, 3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const numbersOnly = value.replace(/\D/g, '');
      // Only format phone numbers for +1 country codes (US/Canada)
      const shouldFormat = selectedCountry.dialCode === '+1';
      const processedPhone = shouldFormat ? formatPhoneNumber(value) : numbersOnly;
      
      setFormData(prev => ({
        ...prev,
        [name]: processedPhone
      }));
      
      // Validate with raw numbers
      const error = validateField(name, numbersOnly);
      const isValid = !error && numbersOnly.length > 0;
      
      setErrors(prev => ({ ...prev, [name]: error }));
      setValidFields(prev => {
        const wasInvalid = !prev[name as keyof typeof prev];
        if (wasInvalid && isValid) {
          // Trigger pulse effect when field becomes valid
          setPulseFields(pulsePrev => ({ ...pulsePrev, [name]: true }));
          setTimeout(() => setPulseFields(pulsePrev => ({ ...pulsePrev, [name]: false })), 300);
        }
        return { ...prev, [name]: isValid };
      });
    } else if (name === 'email') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      // Generate email suggestions
      const suggestions = getEmailSuggestions(value);
      setEmailSuggestions(suggestions);
      setShowEmailSuggestions(suggestions.length > 0);
      
      // Real-time validation
      const error = validateField(name, value);
      const isValid = !error && value.length > 0;
      
      setErrors(prev => ({ ...prev, [name]: error }));
      setValidFields(prev => {
        const wasInvalid = !prev[name as keyof typeof prev];
        if (wasInvalid && isValid) {
          // Trigger pulse effect when field becomes valid
          setPulseFields(pulsePrev => ({ ...pulsePrev, [name]: true }));
          setTimeout(() => setPulseFields(pulsePrev => ({ ...pulsePrev, [name]: false })), 300);
        }
        return { ...prev, [name]: isValid };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      
      // Real-time validation for all fields
      const error = validateField(name, value);
      const isValid = !error && value.length > 0;
      
      setErrors(prev => ({ ...prev, [name]: error }));
      setValidFields(prev => {
        const wasInvalid = !prev[name as keyof typeof prev];
        if (wasInvalid && isValid) {
          // Trigger pulse effect when field becomes valid
          setPulseFields(pulsePrev => ({ ...pulsePrev, [name]: true }));
          setTimeout(() => setPulseFields(pulsePrev => ({ ...pulsePrev, [name]: false })), 300);
        }
        return { ...prev, [name]: isValid };
      });
    }
  };

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setFormData(prev => ({
      ...prev,
      countryCode: country.dialCode
    }));
    setShowCountryDropdown(false);
    setCountrySearch(''); // Clear search when country is selected
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 modal-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-2xl p-4 sm:p-6 md:p-8 relative shadow-2xl border-2 sm:border-4 border-blue-500 modal-slide-up max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-8 pr-8 sm:pr-0">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
            <span className="mr-2 sm:mr-3 text-base sm:text-lg">🚀</span>
            Pass Your PMP Exam in 30 Days or Less!
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm font-light">
            Learn the proven 30-Day strategy, Exam Hacks, & Real-World Frameworks in this{' '}
            <span className="font-semibold text-gray-900">FREE PMP Exam Prep Masterclass</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 field-stagger-1">
            <div>
              <label className="block text-gray-500 text-xs font-medium mb-2">
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Jane"
                  className="w-full px-3 py-2 pr-10 bg-gray-200 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all h-[42px]"
                  required
                />
                {/* Validation Icon */}
                <div className="absolute right-3 top-2.5 flex items-center">
                  {formData.firstName && (
                    validFields.firstName ? (
                      <svg className={`w-5 h-5 text-green-500 ${pulseFields.firstName ? 'success-pulse' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <div className="relative group">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.firstName && (
                          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-500 text-xs font-medium mb-2">
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Smith"
                  className="w-full px-3 py-2 pr-10 bg-gray-200 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all h-[42px]"
                  required
                />
                {/* Validation Icon */}
                <div className="absolute right-3 top-2.5 flex items-center">
                  {formData.lastName && (
                    validFields.lastName ? (
                      <svg className={`w-5 h-5 text-green-500 ${pulseFields.lastName ? 'success-pulse' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <div className="relative group">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.lastName && (
                          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {errors.lastName}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Email and Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 field-stagger-2">
            <div>
              <label className="block text-gray-500 text-xs font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => emailSuggestions.length > 0 && setShowEmailSuggestions(true)}
                  placeholder="smith23@gmail.com"
                  className="w-full px-3 py-2 pr-10 bg-gray-200 border-0 rounded-lg text-sm text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all h-[42px]"
                  required
                />
                
                {/* Email Suggestions */}
                {showEmailSuggestions && emailSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-32 overflow-y-auto">
                    {emailSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        type="button"
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, email: suggestion }));
                          setShowEmailSuggestions(false);
                          const error = validateField('email', suggestion);
                          setErrors(prev => ({ ...prev, email: error }));
                          setValidFields(prev => ({ ...prev, email: !error }));
                        }}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Validation Icon */}
                <div className="absolute right-3 top-2.5 flex items-center">
                  {formData.email && (
                    validFields.email ? (
                      <svg className={`w-5 h-5 text-green-500 ${pulseFields.email ? 'success-pulse' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <div className="relative group">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.email && (
                          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {errors.email}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-500 text-xs font-medium mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="flex bg-gray-200 rounded-lg focus-within:bg-white focus-within:ring-1 focus-within:ring-blue-500 transition-all h-[42px]">
                  {/* Country code dropdown */}
                  <div className="relative flex-shrink-0" ref={dropdownRef}>
                    <button
                      type="button"
                      ref={countryButtonRef}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        if (countryButtonRef.current) {
                          const rect = countryButtonRef.current.getBoundingClientRect();
                          const viewportHeight = window.innerHeight;
                          const viewportWidth = window.innerWidth;
                          const dropdownHeight = 320; // max-h-80 = 320px
                          const dropdownWidth = Math.min(256, viewportWidth - 32); // w-64 or mobile-friendly width
                          const isMobile = viewportWidth < 768;
                          
                          let top = rect.bottom + 4;
                          let left = rect.left;
                          
                          // Mobile-specific positioning - use full width approach
                          if (isMobile) {
                            // Use nearly full width on mobile for better accessibility
                            left = 16; // 16px margin from edge
                            const mobileDropdownWidth = viewportWidth - 32; // 16px margins on both sides
                            
                            // Always position below the button on mobile for consistency
                            top = rect.bottom + 8; // Slightly more spacing on mobile
                            
                            // If dropdown would go below viewport, position it above
                            if (top + dropdownHeight > viewportHeight - 20) {
                              top = rect.top - dropdownHeight - 8;
                            }
                            
                            // Update dropdown width for mobile
                            setDropdownPosition({ 
                              top, 
                              left, 
                              width: mobileDropdownWidth 
                            });
                            setShowCountryDropdown(!showCountryDropdown);
                            return; // Exit early to skip desktop logic
                          } else {
                            // Desktop positioning logic
                            // Adjust if dropdown would go below viewport
                            if (top + dropdownHeight > viewportHeight) {
                              top = rect.top - dropdownHeight - 4;
                            }
                            
                            // Adjust if dropdown would go beyond right edge
                            if (left + dropdownWidth > viewportWidth) {
                              left = viewportWidth - dropdownWidth - 16;
                            }
                          }
                          
                          // Ensure dropdown stays within left edge
                          if (left < 16) {
                            left = 16;
                          }
                          
                          setDropdownPosition({ top, left, width: dropdownWidth });
                        }
                        
                        setShowCountryDropdown(!showCountryDropdown);
                      }}
                      className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none transition-colors border-r border-gray-300 min-w-0 h-full"
                    >
                      <span className="text-base mr-1.5">{selectedCountry.flag}</span>
                      <span className="text-xs font-medium whitespace-nowrap">{selectedCountry.dialCode}</span>
                      <svg className="w-3 h-3 ml-1.5 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                  </div>

                  {/* Phone input */}
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="555123456"
                    className="flex-1 px-3 py-2 pr-10 bg-transparent text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 border-0 min-w-0 h-full"
                    required
                  />
                </div>
                
                {/* Phone Validation Icon - positioned outside the input container */}
                <div className="absolute right-3 top-2.5 flex items-center pointer-events-none">
                  {formData.phone && (
                    validFields.phone ? (
                      <svg className={`w-5 h-5 text-green-500 ${pulseFields.phone ? 'success-pulse' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <div className="relative group pointer-events-auto">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        {errors.phone && (
                          <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-30">
                            {errors.phone}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-4 field-stagger-3">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Register Now For Free
          </button>
          </div>
        </form>
        
      </div>
    </div>
    
    {/* Country dropdown - positioned within modal context */}
    {showCountryDropdown && (
      <div 
        ref={portalDropdownRef}
        className="fixed bg-white border border-gray-200 rounded-lg shadow-xl max-h-80"
        style={{ 
          top: `${dropdownPosition.top}px`,
          left: `${dropdownPosition.left}px`,
          width: `${dropdownPosition.width}px`,
          zIndex: 99999
        }}
      >
        {/* Search input */}
        <div className="p-3 border-b border-gray-200">
          <input
            type="text"
            placeholder="Search countries..."
            value={countrySearch}
            onChange={(e) => setCountrySearch(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            autoFocus
          />
        </div>
        
        {/* Countries list */}
        <div className="max-h-48 overflow-y-auto">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
          <button
            key={country.code}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCountrySelect(country);
            }}
            className="w-full flex items-center px-4 py-3 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-base mr-3">{country.flag}</span>
            <span className="text-xs font-medium mr-2">{country.dialCode}</span>
            <span className="text-xs text-gray-600">{country.name}</span>
          </button>
            ))
          ) : (
            <div className="p-4 text-sm text-gray-500 text-center">
              No countries found
            </div>
          )}
        </div>
      </div>
    )}
    </>
  );
};

export default RegistrationModal;