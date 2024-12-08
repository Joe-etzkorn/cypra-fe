import { REQUEST_URL } from "@constants/req-route";
import { useProfile } from "@stores/profile";
import { useQuery } from "@tanstack/react-query";
import { getInitials, randomColor } from "@utils/common";
import { Avatar, Button, Spin } from "antd";
import { useState } from "react";
import { UserService } from "../../services/user.service";
import { IUserProfile } from "../../types/profile";
import OrganizationAction from "./organization-action";

const Organization = () => {
  const [action, setAction] = useState<"invite" | "edit">();

  const [accountInfo, setAccountInfo] = useState<IUserProfile>();
  const { profile } = useProfile();
  const { data, isFetching } = useQuery({
    queryKey: [REQUEST_URL.COMPANY_USERS],
    queryFn: () =>
      UserService.getUsersOrganization({
        userId: profile?.id || 0,
      }),
    enabled: !!profile,
  });

  const organizationData: IUserProfile[] =
    data?.data?.sort((a: any, b: any) => a?.roleId - b?.roleId) || [];

  const renderContent = () => {
    if (action === "edit") {
      return (
        <OrganizationAction
          initialValues={accountInfo}
          onClose={() => setAction(undefined)}
        />
      );
    }

    return (
      <OrganizationAction
        onClose={() => setAction(undefined)}
        isInvite={true}
      />
    );
  };

  return (
    <div className="px-2 md:px-6 py-4 h-full flex flex-col">
      {action === undefined ? (
        <>
          <div className="text-2xl font-bold py-2">G&G Landscape</div>
          <div className="h-full">
            <div className="py-1">Team Members</div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {isFetching ? (
                <Spin />
              ) : (
                organizationData.map((member, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 items-center cursor-pointer hover:bg-gray-100 rounded-md p-2"
                    onClick={() => {
                      setAccountInfo(member);
                      setAction("edit");
                    }}
                  >
                    <Avatar style={{ backgroundColor: randomColor() }}>
                      {getInitials(`${member.firstName} ${member.lastName}`)}
                    </Avatar>
                    <div>
                      <div className="text-lg font-semi line-clamp-1">
                        {member.firstName} {member.lastName}{" "}
                        {member.roleId === 2 ? "(me)" : ""}
                      </div>
                      <div className="text-sm text-gray-500">
                        {member.lastName}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex justify-end gap-4 px-2 md:px-6">
            <Button
              onClick={() => setAction("invite")}
              className="!bg-[#F4F6F6]"
            >
              Invite Member
            </Button>
          </div>
        </>
      ) : (
        <div className="h-full">{renderContent()}</div>
      )}
    </div>
  );
};

export default Organization;
