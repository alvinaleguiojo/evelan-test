export interface UserData {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?: UserDataItem[];
}

export interface UserDataItem {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Result {
  list: UserDataItem[];
  nextId: number | undefined;
}

export interface Button {
  loadMore: () => void;
  loadingMore: boolean;
  noMore: boolean;
}
