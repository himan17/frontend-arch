import React from "react";
import { Card } from "../../shared/components/ui/Card";
import { FiAlertCircle, FiArrowUpRight } from "react-icons/fi";
import { PlainButton } from "../../shared/components/ui/PlainButton";
import { telegramWindow } from "../../lib/telegram";
import { config } from "../../config/config";

const AuthFailure: React.FC = () => {
  return (
    <Card bgColor="bg-copy">
      <div>
        <div className="pt-4">
          <FiAlertCircle className="text-5xl text-error/70 mx-auto mb-4" />
          <p className="my-4 text-left text-copy-lighter">
            We were unable to log you in. Please try again or contact support if
            the problem persists.
          </p>
        </div>
        <div
          onClick={() => {
            telegramWindow.openTelegramLink(config.support_url);
          }}
        >
          <PlainButton text="Contact Support" Icon={FiArrowUpRight} />
        </div>
      </div>
    </Card>
  );
};

export default AuthFailure;
