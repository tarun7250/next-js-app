import { getFollowedCharacters } from "@/queries/followedCharacters";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

const _NOOP = () => {};

export const Character = ({ character, onFollow = _NOOP }) => {
    const { image, name, status, location, gender, species, type, origin } =
    character;

    const [isFollowing, setIsFollowing] = useState(false);

    useLayoutEffect(()=>{
      getFollowedCharacters().then((result)=>{
        result.forEach((item)=> {
          if(item.id === character.id) {
            setIsFollowing(true);
          }
        })
      },()=>{
        console.error("error occured");
      })
    },[character.id]);

    return (
        <div className="p-4 h-full w-full flex flex-row flex-wrap gap-4 justify-center">
          <Image
            src={image}
            className="flex-1 h-full w-full"
            alt={name}
            height={700}
            width={500}
          />
          <div className="flex-1 flex flex-col font-black text-xl">
            <div>
              Name: <span className="italic font-normal">{name}</span>
            </div>
            <div>
              Status: <span className="italic font-normal">{status}</span>
            </div>
            <div>
              Gender: <span className="italic font-normal">{gender}</span>
            </div>
            <div>
              Species: <span className="italic font-normal">{species}</span>
            </div>
            <div>
              Type: <span className="italic font-normal">{type || "N/A"}</span>
            </div>
            <div>
              Location:
              <span className="italic font-normal">{location.name}</span>
            </div>
            <div>
              Origin: <span className="italic font-normal">{origin.name}</span>
            </div>
            <span>
              <button onClick={()=>{onFollow(); setIsFollowing(true)}} className="flex px-1 follow-btn">
                {isFollowing?"Unfollow":"Follow"}
              </button>
            </span>
          </div>
        </div>
      );
}