import { client } from "@/sanity/client";

function portableTextToPlain(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }
      return block.children
        .map((child: any) => child.text || '')
        .join('');
    })
    .join('\n\n');
}

export async function getGeneralFaqs() {
  try {
    // First, let's see what category slugs exist
    const categories = await client.fetch(`
      *[_type == "faqCategory"] {
        title,
        "slug": slug.current
      }
    `);
    // console.log('📁 Available categories:', categories);

    // Get FAQs with category info to debug
    const allFaqsWithCategory = await client.fetch(`
      *[_type == "faqContent"] {
        question,
        "categorySlug": category->slug.current,
        "categoryTitle": category->title
      }
    `);
    // console.log('📋 All FAQs with their categories:', allFaqsWithCategory);

    // Now fetch only General category FAQs
    // Try lowercase "general" first
    let data = await client.fetch(`
      *[_type == "faqContent" && category->slug.current == "general-website-faqs"] | order(order asc) {
        question,
        answer,
        icon,
        order
      }
    `);

    // If no results, try with different case variations
    if (data.length === 0) {
      // console.log('⚠️ No FAQs found with slug "general", trying alternatives...');
      
      // Try "General" (capitalized)
      data = await client.fetch(`
        *[_type == "faqContent" && category->slug.current == "General"] | order(order asc) {
          question,
          answer,
          icon,
          order
        }
      `);
    }

    // console.log(`✅ Found ${data.length} General FAQs`);

    if (data.length === 0) {
      console.error('❌ No General category FAQs found!');
      console.error('Please check your Sanity Studio:');
      console.error('1. Does a category with slug "general" exist?');
      console.error('2. Are FAQs assigned to this category?');
      return [];
    }

    // Transform the data
    return data.map((faq: any) => ({
      question: faq.question || '',
      answer: portableTextToPlain(faq.answer) || '',
      icon: faq.icon || 'Code',
    }));

  } catch (error) {
    console.error('❌ Error fetching FAQs:', error);
    return [];
  }
}