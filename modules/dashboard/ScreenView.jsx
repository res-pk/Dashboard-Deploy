import { screenContent } from './screenContent';

export default function ScreenView({ slug }) {
  return <div dangerouslySetInnerHTML={{ __html: screenContent[slug] || '<div class="cd"><div class="ch">Not found</div></div>' }} />;
}
