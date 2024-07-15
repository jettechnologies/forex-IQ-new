// pages/RefundPolicyPage.js
import { Box, Text } from '@chakra-ui/react';
import Banner from '../components/Banner';
import banner from "../assets/charts_2.jpg";

const Refund = () => (
  <Box backgroundColor='#46484b' color='#f4f4f4'>
    <Banner title="Refund Policy" banner={banner} />
    <Box p={4}>
      <Text fontSize="lg" lineHeight={1.5} color='#f4f4f4'>
        <Box mb={4}>
          <b>Eligibility for Refunds:</b>
          <br />
          <Text lineHeight={1.5}>Initial Purchase Period: Refund requests must be made within 14 days of the initial purchase date.</Text>
          <Text lineHeight={1.5}>Technical Issues: If The Forex IQ auto trading bot experiences technical issues that cannot be resolved within 30 days of reporting the issue to our support team, a refund may be granted.</Text>
          <Text lineHeight={1.5}>Misrepresentation: If the product does not function as described on our website or in marketing materials, a refund may be granted upon verification of the discrepancy.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Non-Refundable Circumstances:</b>
          <br />
          <Text lineHeight={1.5}>User Error: Refunds will not be granted for issues arising from user error or improper use of The Forex IQ.</Text>
          <Text lineHeight={1.5}>Market Losses: Due to the inherent risks of trading in the forex market, refunds will not be issued for financial losses incurred while using The Forex IQ.</Text>
          <Text lineHeight={1.5}>Change of Mind: Refunds will not be granted for customers who simply change their mind after purchase.</Text>
        </Box>
        
        <Box mb={4}>
          <b>Refund Process:</b>
          <br />
          <Text lineHeight={1.5}>Request Submission: To request a refund, contact our customer support team with your purchase details and a description of the issue.</Text>
          <Text lineHeight={1.5}>Review and Verification: Our team will review your request and may require additional information or documentation to verify the claim.</Text>
          <Text lineHeight={1.5}>Resolution: If the refund request is approved, we will process the refund within 7-10 business days. The refund will be issued to the original payment method.</Text>
        </Box>
        
        <Box mb={4}>
          <Text lineHeight={1.5}>We appreciate your understanding and thank you for choosing The Forex IQ. By using The Forex IQ, you consent to the practices described in this Refund Policy. Please use the software responsibly and in compliance with applicable laws and regulations in the Forex markets.</Text>
        </Box>
      </Text>
    </Box>
  </Box>
);

export default Refund;
