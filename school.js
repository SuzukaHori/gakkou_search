import urlJoin from "url-join";

export class School {
  constructor(name, founder, type, zipCode, address) {
    this.name = name;
    this.founder = founder;
    this.type = type;
    this.zipCode = zipCode;
    this.address = address;
  }

  info() {
    return `
  学校名     :${this.name}
  設置区分   :${this.founder}
  学校種     :${this.type}
  郵便番号   :${this.zipCode}
  学校所在地 :${this.address}
  `;
  }

  mapUrl() {
    return urlJoin(
      "https://www.google.com/maps/search",
      encodeURI(this.address) + "+" + encodeURI(this.name)
    );
  }

  static typeList = [
    ["0", "指定しない"],
    ["A1", "幼稚園"],
    ["A2", "幼保連携型こども園"],
    ["B1", "小学校"],
    ["C1", "中学校"],
    ["C2", "義務教育学校"],
    ["D1", "高等学校"],
    ["D2", "中等教育学校"],
    ["E1", "特別支援学校"],
    ["F1", "大学"],
    ["F2", "短期大学"],
    ["G1", "高等専門学校"],
    ["H1", "専修学校"],
    ["H2", "各種学校"],
  ];

  static prefectureList = [
    ["0", "指定しない"],
    ["01", "北海道"],
    ["02", "青森県"],
    ["03", "岩手県"],
    ["04", "宮城県"],
    ["05", "秋田県"],
    ["06", "山形県"],
    ["07", "福島県"],
    ["08", "茨城県"],
    ["09", "栃木県"],
    ["10", "群馬県"],
    ["11", "埼玉県"],
    ["12", "千葉県"],
    ["13", "東京都"],
    ["14", "神奈川県"],
    ["15", "新潟県"],
    ["16", "富山県"],
    ["17", "石川県"],
    ["18", "福井県"],
    ["19", "山梨県"],
    ["20", "長野県"],
    ["21", "岐阜県"],
    ["22", "静岡県"],
    ["23", "愛知県"],
    ["24", "三重県"],
    ["25", "滋賀県"],
    ["26", "京都府"],
    ["27", "大阪府"],
    ["28", "兵庫県"],
    ["29", "奈良県"],
    ["30", "和歌山県"],
    ["31", "鳥取県"],
    ["32", "島根県"],
    ["33", "岡山県"],
    ["34", "広島県"],
    ["35", "山口県"],
    ["36", "徳島県"],
    ["37", "香川県"],
    ["38", "愛媛県"],
    ["39", "高知県"],
    ["40", "福岡県"],
    ["41", "佐賀県"],
    ["42", "長崎県"],
    ["43", "熊本県"],
    ["44", "大分県"],
    ["45", "宮崎県"],
    ["46", "鹿児島県"],
    ["47", "沖縄県"],
  ];

  static founderList = [
    ["0", "指定しない"],
    ["1", "国立"],
    ["2", "公立"],
    ["3", "私立"],
  ];
}
