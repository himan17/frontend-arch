interface WebAppUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}

interface WebAppChat {
  id: number;
  type: string;
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
}

interface WebAppInitData {
  query_id?: string;
  user?: WebAppUser;
  receiver?: WebAppUser;
  chat?: WebAppChat;
  chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
  chat_instance?: string;
  start_param?: string;
  can_send_after?: number;
  auth_date: number;
  hash: string;
}

interface Window {
  Telegram: {
    WebApp: {
      initData: string;
      initDataUnsafe: WebAppInitData;
      openTelegramLink: (url: string) => void;
      ready: () => void;
      expand: () => void;
      enableClosingConfirmation: () => void;
    };
  };
}
