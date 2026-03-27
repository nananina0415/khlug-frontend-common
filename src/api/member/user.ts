import apiV2Client from "../client/v2";

type GetMyGroupsResponseDto = {
  groupId: string;
  name: string;
}[];

const getMyGroups = async (isActive?: boolean): Promise<GetMyGroupsResponseDto> => {
  const response = await apiV2Client.get<GetMyGroupsResponseDto>("/users/@me/groups", {
    params: { isActive },
  });
  return response.data;
};

type GetCurrentUserResponseDto = {
  id: number;
  name: string;
  manager: boolean;
  status: string;
  studentStatus: string;
  createdAt: string;
  updatedAt: string;
};

const getCurrentUser = async (): Promise<GetCurrentUserResponseDto> => {
  const response =
    await apiV2Client.get<GetCurrentUserResponseDto>("/users/@me");
  return response.data;
};

export const UserPublicApi = {
  getCurrentUser,
  getMyGroups,
};
