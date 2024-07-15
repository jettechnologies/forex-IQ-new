// pages/PrivacyPolicyPage.js
import { Box, Text } from '@chakra-ui/react';
import Banner from '../components/Banner';
import banner from "../assets/charts.jpg";


const Privacy = () => (
  <Box backgroundColor = '#191b20' color = '#f4f4f4'>
    <Banner title="Privacy Policy" subtitle="Privacy policy page" banner = {banner} />
    <Box p={4}>
      <Text fontSize="lg" lineHeight={1.5} color = '#f4f4f4'>
        {/* <h2>Privacy Policy</h2> */}
        <p><b fontBold = 'bold' mb = {4}>Information Collection:</b></p>
        <p>Personal Information: When you create an account or use The Forex IQ, we may collect personal information such as your name, email address, contact information, and payment details.</p>
        <p>Usage Data: We collect data about your interactions with the software, including log data, device information, and analytics. This information helps us improve our services.</p>
        <p>Financial Data: When you create an account or use The Forex IQ, we may collect personal information such as your name, email address, contact information, and payment details.</p>
        <p><b fontBold = 'bold'>Use of Information:</b></p>
        <p>Service Provision: The Forex IQ uses your information to provide, maintain, and improve the software. This includes executing trades, offering support, and enhancing user experience.</p>
        <p>Communication: We may contact you for account-related notifications, updates, and customer support purposes.</p>
        <p>Research and Analytics: The Forex IQ may use aggregated and anonymized data for research and analytical purposes, helping us enhance our services.</p>
        <p>Compliance: We may use your information to comply with legal obligations and regulations, including anti-money laundering and know-your-customer checks.</p>
        <p  mt = {4}><b fontBold = 'bold' mb = {4}>Data Security:</b> The Forex IQ takes data security seriously. We employ industry-standard security measures to protect your information against unauthorized access, disclosure, or alteration. Your financial data, including payment information, is encrypted and securely stored. We do not store sensitive payment information on our servers.</p>
        <p mt = {4}><b fontBold = 'bold' mb = {4}>Data Sharing:</b> The Forex IQ does not sell your personal information to third parties. However, we may share your data with service providers and partners who assist in the delivery of our services. We may disclose information in response to legal requests, law enforcement, and government inquiries, or as necessary to protect our rights, privacy, safety, or property.</p>
        <p mt = {4}><b fontBold = 'bold' mb = {4}>Cookies and Tracking Technologies:</b> The Forex IQ may use cookies and tracking technologies to collect information about your use of the software. These technologies help us improve user experience and provide customized content.</p>
        <p mt = {4}><b fontBold = 'bold' mb = {4}>Your Choices:</b> You can access, review, and update your personal information through your account settings in the software. You can also unsubscribe from non-essential communications. You can disable cookies in your browser, but this may affect the functionality of the software.</p>
        <p mt = {4}><b fontBold = 'bold' mb = {4}>Childrens Privacy:</b> The Forex IQ is not intended for use by individuals under the legal age for trading in the Indian markets. We do not knowingly collect information from minors.</p>
        <p mt = {4}><b fontBold = 'bold' mb = {4}>Changes to Privacy Policy:</b> The Forex IQ may update this Privacy Policy to reflect changes in our practices or legal requirements. Users will be notified of any significant changes via email or a notice on the software.</p>
      </Text>
    </Box>
  </Box>
);

export default Privacy;
