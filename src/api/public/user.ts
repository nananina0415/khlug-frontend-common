import apiV2Client from "../client/v2";

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
};
