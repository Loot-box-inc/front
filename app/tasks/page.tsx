"use client";

import React, { useState } from "react";
import { Button, Modal, Input, Space } from "antd";
import type { SearchProps } from 'antd/es/input/Search';
import Link from 'next/link'
import Image from 'next/image'

import user1 from "@/public/contact/user1.jpg";
import user2 from "@/public/contact/user2.jpg";
import user3 from "@/public/contact/user3.jpg";
import user4 from "@/public/contact/user4.jpg";
import user5 from "@/public/contact/user5.jpg";


const { Search } = Input;

export default function Tasks() {

  const [hasShared, sethasShared] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onShare = () => {
    sethasShared(true);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        {hasShared ? (
          <ClaimReward />
        ) : (
          <>
            <h1 className="-mt-20 pb-5 text-center font-bold text-lg">
              Choose from one of the tasks below:
            </h1>
            <div>
              <ActionItem
                text="1. Share a lootbox with a friends"
                actionButton={
                  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded-full"
                    onClick={showModal}>Send</Button>}
              />
              <ActionItem
                text="2. Upload a video with you and your friends"
                actionButton={
                  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded-full"
                    onClick={showModal}>Upload</Button>}
              />
              <ActionItem
                text="3. Join our group"
                actionButton={
                  <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-4 rounded-full"
                    onClick={showModal}>Join</Button>}
              />
            </div>
            <Modal title="Contact List" open={isModalOpen} onCancel={handleCancel} width={350}>
              <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
              <div className="flex flex-wrap gap-4 p-4">
                <Link href="https://t.me/share/url?url=https://lootfront.netlify.app" target="_blank">
                  <div className="flex flex-col justify-center items-center" onClick={onShare}>
                    <Image src={user1} width={50} height={50} alt="user1" className="rounded-full" />
                    <span>user1</span>
                  </div>
                </Link>
                <Link href="https://t.me/share/url?url=https://lootfront.netlify.app" target="_blank">
                  <div className="flex flex-col justify-center items-center" onClick={onShare}>
                    <Image src={user2} width={50} height={50} alt="user2" className="rounded-full" />
                    <span>user2</span>
                  </div>
                </Link>
                <Link href="https://t.me/share/url?url=https://lootfront.netlify.app" target="_blank">
                  <div className="flex flex-col justify-center items-center" onClick={onShare}>
                    <Image src={user3} width={50} height={50} alt="user3" className="rounded-full" />
                    <span>user3</span>
                  </div>
                </Link>
                <Link href="https://t.me/share/url?url=https://lootfront.netlify.app" target="_blank">
                  <div className="flex flex-col justify-center items-center" onClick={onShare}>
                    <Image src={user4} width={50} height={50} alt="user4" className="rounded-full" />
                    <span>user4</span>
                  </div>
                </Link>
                <Link href="https://t.me/share/url?url=https://lootfront.netlify.app" target="_blank">
                  <div className="flex flex-col justify-center items-center" onClick={onShare}>
                    <Image src={user5} width={50} height={50} alt="user5" className="rounded-full" />
                    <span>user5</span>
                  </div>
                </Link>
              </div>
            </Modal>
          </>
        )}
      </main>
    </>
  );
}

const ClaimReward: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="pb-5">Task Completed Successfully!</div>
      <a
        href="claim"
        className="bg-blue rounded h-10 w-fit px-5 text-center flex items-center justify-center"
      >
        Claim Here!
      </a>
    </div>
  );
};

const ActionItem: React.FC<{ text: string; actionButton: React.ReactNode }> = ({ text, actionButton }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-5">
      <span className="w-2/3">{text}</span>
      {actionButton}
    </div>
  );
};


// const ActionButton: React.FC<{
//   children: string;
//   onShare: (prevState: boolean) => void;
// }> = ({ children, onShare }) => {
//   return (
//     <a
//       onClick={(event: React.MouseEvent<HTMLElement>) => {
//         event.preventDefault();
//         // window.open(
//         //   "https://t.me/share/url?url=https://lootfront.netlify.app",
//         //   "_blank"
//         // );
//         onShare(true);

//         // Simulate a delay to allow the user to share the link
//         // setTimeout(() => {
//         //   // Navigate to the new page in your app
//         //   window.open("/"); // Replace '/newpage' with your desired route
//         // }, 2000); // Adjust the delay as needed
//       }}
//       //   href="https://t.me/share/url?url=https://google.com"
//       className="bg-blue rounded h-10 w-20 text-center  flex items-center justify-center"
//     >
//       <div>{children}</div>
//     </a>
//   );
// };
