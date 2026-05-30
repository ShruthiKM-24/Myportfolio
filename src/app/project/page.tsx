import { Column, Heading } from "@/once-ui/components";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { project, person, newsletter } from "@/app/resources/content";

export async function generateMetadata() {
  const title = project.title;
  const description = project.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/project`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project() {
  return (
    <Column maxWidth="m">
      <Heading marginBottom="l" variant="display-strong-s">
        {project.title}
      </Heading>
      <Column fillWidth flex={1}>
        <Projects directory={["src", "app", "project", "entries"]} />
      </Column>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
