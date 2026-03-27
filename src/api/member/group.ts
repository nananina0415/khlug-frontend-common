import apiV2Client from "../client/v2";

type GetGroupMembersResponseDto = {
  memberId: number;
  name: string;
}[];

const getGroupMembers = async (groupId: string): Promise<GetGroupMembersResponseDto> => {
  const response = await apiV2Client.get<GetGroupMembersResponseDto>(
    `/groups/${groupId}/members`
  );
  return response.data;
};

export const GroupMemberApi = {
  getGroupMembers,
};