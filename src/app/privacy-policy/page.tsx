import Layout from '../components/Layout'

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">Privacy Policy</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="mb-4">
            At Kids Blog, we are committed to protecting the privacy of our young visitors and their families. This Privacy Policy outlines how we collect, use, and safeguard personal information on our website.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-purple-600">Information We Collect</h2>
          <p className="mb-4">
            We do not collect any personal information from children without parental consent. When leaving comments or contacting us, we may ask for a name and email address, which are used solely for communication purposes.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-purple-600">How We Use Information</h2>
          <p className="mb-4">
            Any information collected is used only to respond to inquiries or improve our website content. We do not share, sell, or disclose personal information to third parties.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-purple-600">Parental Rights</h2>
          <p className="mb-4">
            Parents have the right to review, delete, or refuse further collection of their child&apos;s personal information. Please contact us if you have any concerns or questions about your child's privacy on our website.
          </p>
          <p>
            By using Kids Blog, you agree to the terms outlined in this Privacy Policy. We may update this policy from time to time, so please check back regularly for any changes.
          </p>
        </div>
      </div>
    </Layout>
  )
}

