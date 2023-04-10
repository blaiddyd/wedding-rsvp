import type { NextApiRequest, NextApiResponse } from "next";

type RsvpRequest =  NextApiRequest & {
  fullName: string;
  email: string;
  rsvp: 'yes' | 'no';
  dietaryRequirements: string[];
  plusOne?: boolean;
};

type RsvpResponse = {
  rsvpSuccessful: boolean;
  errorReason?: 'Something went wrong.' | 'The guest is not invited';
}

export default function handler(
    req: RsvpRequest,
    res: NextApiResponse<RsvpResponse>
  ) {
    
  
}
  