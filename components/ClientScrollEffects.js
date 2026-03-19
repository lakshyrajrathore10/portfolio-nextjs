"use client";
import React from 'react';
import {
  ScrollProgressBar,
  ScrollCounter,
  ScrollOrbs,
} from '@/components/ui/ScrollElements';

export default function ClientScrollEffects() {
  return (
    <>
      <ScrollProgressBar />
      <ScrollCounter />
      <ScrollOrbs />
    </>
  );
}
