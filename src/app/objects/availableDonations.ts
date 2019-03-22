export interface AvailableDonations {
    id: number;
    name: string;
    requested_quantity: number;
    existing_quantity: number;
    donations_count: number;
    hospital: string;
    blood_type: string;
    creation_date: {
          date: Date,
          timezone_type: number,
          timezone: string
    };
    last_donation_date: {
        date: Date,
        timezone_type: number,
        timezone: string
    };
}