import { useProfile } from "@stores/profile";
import { getInitials } from "@utils/common";

import { randomColor } from "@utils/common";
import { Avatar } from "antd";

interface IProfileHeaderProps {
  firstName?: string;
  lastName?: string;
}

const ProfileHeader = ({ firstName, lastName }: IProfileHeaderProps) => {
  const { profile } = useProfile();
  return (
    <div className="flex items-center gap-2 py-2 mb-2">
      <Avatar style={{ backgroundColor: randomColor() }} size={50}>
        {getInitials(`${firstName ?? profile?.firstName} ${lastName ?? profile?.lastName}`)}
      </Avatar>
      <div className="text-2xl font-bold">{`${firstName ?? profile?.firstName} ${lastName ?? profile?.lastName}`}</div>
    </div>
  );
};

export default ProfileHeader;
