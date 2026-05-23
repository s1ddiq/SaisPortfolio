import { useEffect, useState } from "react";

function SilvaAvatar() {
  const [avatarUrl, setAvatarUrl] = useState("/avatar.webp");
  const [loading, setLoading] = useState(true);
  const userId = "785560169575612459";

  useEffect(() => {
    async function fetchAvatar() {
      try {
        const response = await fetch(
          `https://gatecord.com/wp-json/discord/profile/${userId}`,
        );
        const data = await response.json();

        // Construct the Discord CDN URL with the avatar hash from API
        const cdUrl = `https://cdn.discordapp.com/avatars/${userId}/${data.avatar}.png?size=512`;
        setAvatarUrl(cdUrl);
      } catch (error) {
        console.error("Failed to fetch avatar:", error);
        // Fallback to the known working URL
        setAvatarUrl(
          `https://cdn.discordapp.com/avatars/${userId}/e58c92e5baebe9000a5711cab973e3e9.png?size=512`,
        );
      } finally {
        setLoading(false);
      }
    }

    fetchAvatar();
  }, [userId]);

  if (loading) {
    return (
      <div className="w-[100px] h-[100px] rounded-full bg-gray-700 animate-pulse" />
    );
  }

  return (
    <img
      src={avatarUrl}
      alt="Silva"
      width={100}
      height={100}
      className="rounded-full"
    />
  );
}

export default SilvaAvatar;
