"use client";

import React from "react";
import { useEffect, useState } from "react";

function NoSSRTest() {

  const a = Math.random();

  return <div>{a}</div>;
}

export default NoSSRTest;
