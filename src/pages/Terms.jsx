// pages/TermsAndConditionsPage.js
import { Box, Text } from '@chakra-ui/react';
import Banner from '../components/Banner';
import banner from "../assets/charts_3.jpg";

const Terms = () => (
  <Box>
    <Banner title="Terms and Conditions" subtitle="Terms and conditions" banner={banner}/>
    <Box p={4}>
      <Text fontSize="lg" lineHeight="1.5em">
        <p><b fontBold = 'bold'>License and Usage:</b> The Forex IQ grants you a non-exclusive, non-transferable, limited license to use for personal or business purposes, in accordance with these Terms. You must be of legal age to use in the Forex markets. By using the software, you confirm that you meet the legal age requirement.</p>
        <p><b fontBold = 'bold'>Data and Content:</b> The Forex IQ provides access to financial data and content for informational purposes. While we endeavor to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or reliability of the data and content. You acknowledge the inherent volatility of financial markets, and that past performance is not indicative of future results.</p>
        <p><b fontBold = 'bold'>Risk Disclosure:</b> Trading in the Forex markets involves financial risk. You must carefully consider your risk tolerance and financial situation before using the software. The Forex IQ does not provide financial advice. You are responsible for all trading decisions and their consequences. The software is a tool for execution; the user is solely responsible for strategy development and implementation.</p>
        <p><b fontBold = 'bold'>Privacy and Data Security:</b> The Forex IQ is committed to safeguarding your data and privacy. We collect and process personal information in accordance with our Privacy Policy, which is an integral part of these Terms. You must not share your login credentials with others or allow unauthorized access to your account. You are responsible for any activity occurring under your account.</p>
        <p><b fontBold = 'bold'>Intellectual Property:</b> The Forex IQ is protected by intellectual property rights, including copyrights and trademarks. You agree not to reproduce, modify, distribute, or create derivative works based on the software without prior written consent.</p>
        <p><b fontBold = 'bold'>Termination:</b> The Forex IQ reserves the right to terminate your access at any time, without notice, for violation of these Terms or for any other reason.</p>
        <p><b fontBold = 'bold'>Disclaimer:</b> The Forex IQ is provided as is and as available, without warranties of any kind, including but not limited to merchantability and fitness for a particular purpose. The software is not liable for any losses, damages, or liabilities resulting from your use of the software.</p>
        <p><b fontBold = 'bold'>Indemnification:</b> You agree to indemnify and hold the software, its affiliates, and its employees, harmless from any claims, losses, or liabilities arising from your use of the software.</p>
        <p><b fontBold = 'bold'>Amendments:</b> The Forex IQ may update or modify these Terms at any time. Continued use of the software following any changes constitutes acceptance of the revised Terms.</p>
      </Text>
    </Box>
  </Box>
);

export default Terms;
