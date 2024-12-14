"use client";

import { RealTimeData } from "@/lib/types";
import { atom } from "jotai";

export const realTimeData = atom<RealTimeData>({} as RealTimeData);
