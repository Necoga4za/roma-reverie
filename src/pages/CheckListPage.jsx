import React, { useState } from 'react';

import './CheckListPage.css';

const checklistData = [
  {
    category: 'Clothing & Accessories',
    items: [
      { label: 'Clothes', description: '5 Tops / 4 Bottoms' },
      { label: 'Socks / Underwear', description: '속옷 및 양말 5~6세트' },
      { label: 'Sunglasses', description: '자외선 차단용 선글라스' },
      { label: 'Umbrella', description: '휴대용 접이식 우산' },
      { label: 'Swinsuit', description: '수영복 1벌' },
    ],
  },
  {
    category: 'Toiletries',
    items: [
      { label: 'Toothbrush', description: '여분 포함 칫솔 1~2개' },
      { label: 'Toothpaste', description: '여행용 치약' },
      { label: 'Shampoo', description: '여행용 샴푸 Or 고체 샴푸' },
      { label: 'Contact Lenses', description: '콘택트렌즈 및 리뉴' },
      { label: 'Cosmetics', description: '기초 화장품 및 메이크업 제품' },
      { label: 'Sunscreen', description: '자외선 차단제' },
      { label: 'Toner', description: '스킨토너' },
      { label: 'Towel', description: '여행용 수건' },
    ],
  },
  {
    category: 'Tech / Gadets',
    items: [
      { label: 'Charger', description: '휴대폰 / 카메라 충전기' },
      { label: 'Power Bank', description: '보조 배터리' },
      { label: 'Camera', description: '카메라' },
      { label: 'Earphones', description: '이어폰' },
      { label: 'Laptop', description: '필요 시 노트북' },
      { label: 'Headset', description: '헤드셋' },
      { label: 'Universal Adapter', description: '국제용 플러그 어댑터' },
      { label: 'Mobile Phone', description: '휴대폰' },
    ],
  },
  {
    category: 'Documents',
    items: [
      { label: 'Passport', description: '여권' },
      { label: 'Plane Ticket', description: '탑승권 / E-Ticket' },
      { label: 'Travel Insurance', description: '여행자 보험 증서' },
      { label: 'ID Card', description: '신분증' },
      { label: 'Visa', description: '비자' },
      { label: 'Passport Copy', description: '여권 사본 1~2장' },
      { label: 'Pen', description: '입국 카드 작성용 펜' },
      { label: 'E-SIM', description: '데이터용 E-Sim Or 현지 Sim' },
    ],
  },
];

export default function ChecklistPage() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (label) => {
    setCheckedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
     <h1 className="title">CHECKLIST.</h1>
    <div className="page">
      {checklistData.map((section, index) => (
        <div key={index} className="section">
          <h2 className="category">{section.category}</h2>
          {section.items.map((item, idx) => (
            <div key={idx} className="item-row">
              <div className="item-left">
                <div
                  className={`checkbox ${checkedItems[item.label] ? 'checked' : ''}`}
                  onClick={() => handleCheck(item.label)}
                >
                  {checkedItems[item.label] && '✓'}
                </div>
                <span className="item-label">{item.label}</span>
              </div>
              <span className="item-description">{item.description}</span>
            </div>
          ))}
        </div>
      ))}
    </div></>
  );
}

