import { FaCreditCard, FaBook, FaBriefcase, FaGoogleWallet,
        FaProductHunt, FaCreativeCommonsSamplingPlus, FaGg,
        FaAddressBook, FaBookReader } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, url: '/products' },
      { label: 'terminal', icon: <FaGg />, url: '/products' },
      { label: 'connect', icon: <FaGoogleWallet />, url: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaCreativeCommonsSamplingPlus />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaAddressBook />, url: '/products' },
      { label: 'billing', icon: <FaBookReader />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaProductHunt />, url: '/products' },
    ],
  },
];

export default sublinks;