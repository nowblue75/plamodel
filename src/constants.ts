/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const HUD_TEXTS = [
  "SYSTEM ONLINE : OPTICAL FEED ACTIVE",
  "TARGET LOCKED : MADO KING GRANZORT",
  "SURFACE ANALYSIS : INTEGRITY 100%",
  "TERRAIN SYNC : 100%",
  "WEAPON IGNITION : MAXIMUM YIELD",
  "LIMITER OFF : CRITICAL ENGAGEMENT"
];

export const CINEMATIC_SCENES = [
  { 
    id: 1, 
    title: "TEMPORAL_IGNITION", 
    sub: "시공의 기동 // SEQUENCE_01", 
    img: "/assets/그랑죠 덱 통합(2)_20260422 (0).jpg", 
    video: "/assets/record_01.mp4", 
    desc: "마동 에너지를 시공간에 방출하여 소환 시퀀스를 초기화합니다.", 
    effect: "SCAN_SWEEP" 
  },
  { 
    id: 2, 
    title: "NUCLEAR_CORE_SYNC", 
    sub: "핵심 코어 동기화 // SEQUENCE_02", 
    img: "/assets/그랑죠 덱 통합(2)_20260422 (1).jpg", 
    video: "/assets/record_02.mp4", 
    desc: "마동 기체의 핵심 연산 장치와 조종자의 마력을 일치시킵니다.", 
    effect: "CENTER_PULSE" 
  },
  { 
    id: 3, 
    title: "SPATIAL_ALIGNMENT", 
    sub: "공간 동기화 // SEQUENCE_03", 
    img: "/assets/그랑죠 덱 통합(2)_20260422 (2).jpg", 
    video: "/assets/record_03.mp4", 
    desc: "공간적 제약을 해제하고 기체의 물성을 고차원 에너지로 변환합니다.", 
    effect: "EYE_GLOW" 
  },
  { 
    id: 4, 
    title: "TACTICAL_DUEL", 
    sub: "전술적 대결 // SEQUENCE_04", 
    img: "/assets/그랑죠 덱 통합(2)_20260422 (3).jpg", 
    video: "/assets/record_04.mp4", 
    desc: "적 기체와의 전술적 거리와 타격 지점을 실시간으로 분석합니다.", 
    effect: "ENERGY_PULSE" 
  },
  { 
    id: 5, 
    title: "AWAKENING_PROTOCOL", 
    sub: "각성의 프로토콜 // SEQUENCE_05", 
    img: "/assets/그랑죠 덱 통합(2)_20260422 (4).jpg", 
    video: "/assets/record_05.mp4", 
    desc: "기체의 진정한 힘을 개방하여 배틀 모드 시스템을 활성화합니다.", 
    effect: "SCAN_SWEEP" 
  },
  { 
    id: 6, 
    title: "FINAL_STRIKE_PHASE", 
    sub: "필살 연출 // SEQUENCE_06", 
    img: "/assets/그랑죠 덱 통합(2)_20260422 (5).jpg", 
    video: "/assets/record_06.mp4", 
    desc: "에르디카이저의 에르너지를 집중시켜 공간 전체를 타격하는 최종 시퀀스입니다.", 
    effect: "CENTER_PULSE" 
  }
];

export const PROCESS_ARCHIVE = [
  {
    id: "wip",
    label: "WIP_PROCESS",
    desc: "기체 조립 및 제작 초기 공정의 실제 보관 데이터. 제작자의 손끝에서 탄생하는 그랑죠의 초기 원형입니다.",
    images: [
      "/assets/그랑죠 제작프로세스 (0).jpg",
      "/assets/그랑죠 제작프로세스 (1).jpg",
      "/assets/그랑죠 제작프로세스 (2).jpg",
      "/assets/그랑죠 제작프로세스 (3).jpg",
      "/assets/그랑죠 제작프로세스 (5).jpg",
      "/assets/그랑죠 제작프로세스 (6).jpg"
    ]
  },
  {
    id: "complete",
    label: "COMPLETED_WORKS",
    desc: "전처리가 완료된 고화질 완성 이미지 아카이브. AI 업스케일링과 텍스처 보정을 거친 정밀 데이터 전량(75장)입니다.",
    images: [
      "/assets/IMG_0255.JPG",
      "/assets/IMG_0256.JPG",
      "/assets/IMG_1393.JPG",
      "/assets/IMG_1395.JPG",
      "/assets/IMG_1396.JPG",
      "/assets/IMG_1398.JPG",
      "/assets/IMG_1399.JPG",
      "/assets/IMG_1400.JPG",
      "/assets/IMG_E1002.JPG",
      "/assets/IMG_E1395.JPG",
      "/assets/IMG_E1397.JPG",
      "/assets/IMG_E1398.JPG",
      "/assets/IMG_E1399.JPG"
    ]
  },
  {
    id: "synth",
    label: "TACTICAL_SYNTH",
    desc: "최종 전술 HUD 및 이펙트 합성 시퀀스. 장인님의 '그랑죠 덱 통합' 전 시리즈(Ver.1 & Ver.2)가 모두 집약된 전술 아카이브입니다.",
    images: [
      "/assets/그랑죠 덱 통합(2)_20260422 (0).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (1).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (2).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (3).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (4).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (5).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (6).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (7).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (8).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (9).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (10).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (11).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (12).jpg",
      "/assets/그랑죠 덱 통합(2)_20260422 (13).jpg"
    ]
  }
];

export const BRAND = {
  name: "STUDIO ONE",
  project: "MADO-KING: THE DEFINITIVE ARCHIVE",
  version: "V2.0_PREMIUM",
  footer: "Archive Created by Studio One"
};
