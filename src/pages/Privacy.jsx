// pages/PrivacyPolicyPage.js
import { Box, Text } from '@chakra-ui/react';
import Banner from '../components/Banner';
import banner from "../assets/charts.jpg";

const Privacy = () => (
  <Box backgroundColor='#46484b' color='#f4f4f4'>
    <Banner title="Privacy Policy" banner={banner} />
    <Box p={4}>
      <Text fontSize="lg" lineHeight={1.5} color='#f4f4f4'>
        <Box mb={4}>
          <b>Information Collection:</b>
          <br />
          <Text lineHeight={1.5}>Personal Information: When you create an account or use The Forex IQ, we may collect personal information such as your name, email address, contact information, and payment details.</Text>
          <Text lineHeight={1.5}>Usage Data: We collect data about your interactions with the software, including log data, device information, and analytics. This information helps us improve our services.</Text>
          <Text lineHeight={1.5}>Financial Data: When you create an account or use The Forex IQ, we may collect personal information such as your name, email address, contact information, and payment details.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Use of Information:</b>
          <br />
          <Text lineHeight={1.5}>Service Provision: The Forex IQ uses your information to provide, maintain, and improve the software. This includes executing trades, offering support, and enhancing user experience.</Text>
          <Text lineHeight={1.5}>Communication: We may contact you for account-related notifications, updates, and customer support purposes.</Text>
          <Text lineHeight={1.5}>Research and Analytics: The Forex IQ may use aggregated and anonymized data for research and analytical purposes, helping us enhance our services.</Text>
          <Text lineHeight={1.5}>Compliance: We may use your information to comply with legal obligations and regulations, including anti-money laundering and know-your-customer checks.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Data Security:</b>
          <br />
          <Text lineHeight={1.5}>The Forex IQ takes data security seriously. We employ industry-standard security measures to protect your information against unauthorized access, disclosure, or alteration. Your financial data, including payment information, is encrypted and securely stored. We do not store sensitive payment information on our servers.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Data Sharing:</b>
          <br />
          <Text lineHeight={1.5}>The Forex IQ does not sell your personal information to third parties. However, we may share your data with service providers and partners who assist in the delivery of our services. We may disclose information in response to legal requests, law enforcement, and government inquiries, or as necessary to protect our rights, privacy, safety, or property.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Cookies and Tracking Technologies:</b>
          <br />
          <Text lineHeight={1.5}>The Forex IQ may use cookies and tracking technologies to collect information about your use of the software. These technologies help us improve user experience and provide customized content.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Your Choices:</b>
          <br />
          <Text lineHeight={1.5}>You can access, review, and update your personal information through your account settings in the software. You can also unsubscribe from non-essential communications. You can disable cookies in your browser, but this may affect the functionality of the software.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Childrens Privacy:</b>
          <br />
          <Text lineHeight={1.5}>The Forex IQ is not intended for use by individuals under the legal age for trading in the Indian markets. We do not knowingly collect information from minors.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Changes to Privacy Policy:</b>
          <br />
          <Text lineHeight={1.5}>The Forex IQ may update this Privacy Policy to reflect changes in our practices or legal requirements. Users will be notified of any significant changes via email or a notice on the software.</Text>
        </Box>
      </Text>
    </Box>
  </Box>
);

export default Privacy;
