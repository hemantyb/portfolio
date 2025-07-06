import { notFound } from "next/navigation";
import { blogPosts } from "@/data/sampleData";
import Layout from "@/components/Layout";
import BlogPostDetail from "@/components/BlogPostDetail";

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = blogPosts.find((p) => p.slug === slug);

	if (!post) {
		notFound();
	}

	return (
		<Layout>
			<BlogPostDetail post={post} />
		</Layout>
	);
}
