import Image from 'next/image';
import Aim from "@/assets/members/Aim.jpeg";
import Memee from "@/assets/members/Memee.jpeg";
import Wawa from "@/assets/members/Wawa.jpeg";
import Leo from "@/assets/members/ลีโอ.jpeg";
import Amy from "@/assets/members/Amy.png";
import Neiy from "@/assets/members/Neiy.jpeg";
import Yeekheng from "@/assets/members/Yeekheng.jpeg";
import Sky from "@/assets/members/สกาย.jpeg";
import Big from "@/assets/members/Big.jpeg";
import Noon from "@/assets/members/Noon.jpeg";
import Thi from "@/assets/members/ธิ.jpeg";
import Ford from "@/assets/members/ฟอร์ด.jpeg";
import Bonus from "@/assets/members/Bonus.jpeg";
import Ohm from "@/assets/members/Ohm.jpeg";
import B from "@/assets/members/บี.jpeg";
import Snow from "@/assets/members/สโนว์.jpeg";
import Boss from "@/assets/members/Boss.jpeg";
import Paeng from "@/assets/members/Paeng.jpeg";
import Plon from "@/assets/members/พล.jpg";
import Tata from "@/assets/members/ตาต้า.jpg";
import Brunei from "@/assets/members/Brunei.jpeg";
import Pim from "@/assets/members/Pim.jpeg";
import V from "@/assets/members/วี.jpg";
import Watermelon from "@/assets/members/แตงโม.jpg";
import Chega from "@/assets/members/Chega.jpeg";
import Putter from "@/assets/members/Putter.jpeg";
import New from "@/assets/members/นิว.jpeg";
import Femmy from "@/assets/members/เฟมมี่.jpeg";
import Earth from "@/assets/members/Earth.jpeg";
import Rada from "@/assets/members/Rada.jpeg";
import Beam from "@/assets/members/บีม.jpeg";
import Stang from "@/assets/members/สตางค์.jpg";
import Float from "@/assets/members/Float.jpeg";
import Saint from "@/assets/members/Saint.jpeg";
import Boom from "@/assets/members/บูม.jpeg";
import BaJang from "@/assets/members/บ๊ะจ่าง.jpeg";
import Green from "@/assets/members/Green.jpeg";
import Sand from "@/assets/members/Sand.jpeg";
import Pat from "@/assets/members/ปัท.jpeg";
import Party from "@/assets/members/ปาร์ตี้.jpeg";
import Gundum from "@/assets/members/Gundum.jpeg";
import Scott from "@/assets/members/Scott.jpg";
import Om from "@/assets/members/ออม.jpeg";
import KungTen from "@/assets/members/กุ้งเต้น.jpeg";
import Jame from "@/assets/members/Jame.jpeg";
import Sharp from "@/assets/members/Sharp.jpeg";
import Pat2 from "@/assets/members/แพท.png";
import Jukjan from "@/assets/members/จั๊กจั่น.jpeg";
import Lin from "@/assets/members/Lin.jpeg";
import Stamp from "@/assets/members/Stamp.jpg";
import Juer from "@/assets/members/จื้อ.jpeg";
import Winter from "@/assets/members/วินเทอร์.jpeg";
import Meen from "@/assets/members/Meen.jpeg";
import Titan from "@/assets/members/Titan.jpeg";
import Min from "@/assets/members/มิ้น.jpeg";

export default function MemberBox() {
  const members = [
    { name: "Aim", image: Aim },
    { name: "Memee", image: Memee },
    { name: "Wawa", image: Wawa },
    { name: "ลีโอ", image: Leo },
    { name: "Amy", image: Amy },
    { name: "Neiy", image: Neiy },
    { name: "Yeekheng", image: Yeekheng },
    { name: "สกาย", image: Sky },
    { name: "Big", image: Big },
    { name: "Noon", image: Noon },
    { name: "ธิ", image: Thi },
    { name: "ฟอร์ด", image: Ford },
    { name: "Bonus", image: Bonus },
    { name: "Ohm", image: Ohm },
    { name: "บี", image: B },
    { name: "สโนว์", image: Snow },
    { name: "Boss", image: Boss },
    { name: "Paeng", image: Paeng },
    { name: "พล", image: Plon },
    { name: "ตาต้า", image: Tata },
    { name: "Brunei", image: Brunei },
    { name: "Pim", image: Pim },
    { name: "วี", image: V },
    { name: "แตงโม", image: Watermelon },
    { name: "Chega", image: Chega },
    { name: "Putter", image: Putter },
    { name: "นิว", image: New },
    { name: "เฟมมี่", image: Femmy },
    { name: "Earth", image: Earth },
    { name: "Rada", image: Rada },
    { name: "บีม", image: Beam },
    { name: "สตางค์", image: Stang },
    { name: "Float", image: Float },
    { name: "Saint", image: Saint },
    { name: "บูม", image: Boom },
    { name: "บ๊ะจ่าง", image: BaJang },
    { name: "Green", image: Green },
    { name: "Sand", image: Sand },
    { name: "ปัท", image: Pat },
    { name: "ปาร์ตี้", image: Party },
    { name: "Gundum", image: Gundum },
    { name: "Scott", image: Scott },
    { name: "ออม", image: Om },
    { name: "กุ้งเต้น", image: KungTen },
    { name: "Jame", image: Jame },
    { name: "Sharp", image: Sharp },
    { name: "แพท", image: Pat2 },
    { name: "จั๊กจั่น", image: Jukjan },
    { name: "Lin", image: Lin },
    { name: "Stamp", image: Stamp },
    { name: "จื้อ", image: Juer },
    { name: "วินเทอร์", image: Winter },
    { name: "Meen", image: Meen },
    { name: "Titan", image: Titan },
    { name: "มิ้น", image: Min },
  ];

  return (
    <div className="bg-[#0F082C] pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-center w-3/4 mx-auto">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-800 rounded-lg p-4 text-white font-semibold min-w-[200px] max-w-fit"
          >
            <Image
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover"
              width={80}
              height={80}
            />
            <p className="font-bold text-lg whitespace-nowrap">{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}