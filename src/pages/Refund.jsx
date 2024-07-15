// pages/RefundPolicyPage.js
import { Box, Text } from '@chakra-ui/react';
import Banner from '../components/Banner';
import banner from "../assets/charts_2.jpg";


const Refund = () => (
  <Box backgroundColor = '#0e1113' color = '#f4f4f4'>
    <Banner title="Refund Policy" subtitle="Refund policy page" banner = {banner}/>
    <Box p={4}>
      <Text fontSize="lg" lineHeight="1.5em">
        <p><b fontBold = 'bold'>Eligibility for Refunds:</b></p>
        <p>Initial Purchase Period: Refund requests must be made within 14 days of the initial purchase date.</p>
        <p>Technical Issues: If The Forex IQ auto trading bot experiences technical issues that cannot be resolved within 30 days of reporting the issue to our support team, a refund may be granted.</p>
        <p>Misrepresentation: If the product does not function as described on our website or in marketing materials, a refund may be granted upon verification of the discrepancy.</p>
        <p><b fontBold = 'bold'>Non-Refundable Circumstances:</b></p>
        <p>User Error: Refunds will not be granted for issues arising from user error or improper use of The Forex IQ.</p>
        <p>Market Losses: Due to the inherent risks of trading in the forex market, refunds will not be issued for financial losses incurred while using The Forex IQ.</p>
        <p>Change of Mind: Refunds will not be granted for customers who simply change their mind after purchase.</p>
        <p><b fontBold = 'bold'>Refund Process:</b></p>
        <p>Request Submission: To request a refund, contact our customer support team with your purchase details and a description of the issue.</p>
        <p>Review and Verification: Our team will review your request and may require additional information or documentation to verify the claim.</p>
        <p>Resolution: If the refund request is approved, we will process the refund within 7-10 business days. The refund will be issued to the original payment method.</p>
        <p>We appreciate your understanding and thank you for choosing The Forex IQ. By using The Forex IQ, you consent to the practices described in this Privacy Policy. Please use the software responsibly and in compliance with applicable laws and regulations in the Forex markets.</p>
      </Text>
    </Box>
  </Box>
);

export default Refund;
