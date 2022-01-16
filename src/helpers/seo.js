export default function seo(data = {}) {
  data.title = data.title || "Careeyour";
  data.metaDescription = data.metaDescription || "Browse or post jobs.";

  document.title = data.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.metaDescription);
}
