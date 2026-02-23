/*
  # Create contact_submissions table

  Stores qualifying questionnaire form submissions from the Archer Senior Living website.

  ## Columns
  - id: unique identifier
  - name: contact person name
  - relationship: relationship to resident
  - resident_name: name of prospective resident
  - resident_age: age of resident
  - care_needs: array of care needs selected
  - preferred_location: Pinckney, Hamburg, or no preference
  - timeline: placement urgency
  - phone: contact phone number
  - best_time_to_call: preferred contact window
  - email: optional email
  - additional_notes: free-form notes
  - created_at: submission timestamp

  ## Security
  - RLS enabled; inserts allowed for anonymous users (public form), no public reads
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  relationship text NOT NULL DEFAULT '',
  resident_name text NOT NULL DEFAULT '',
  resident_age integer,
  care_needs text[] DEFAULT '{}',
  preferred_location text DEFAULT '',
  timeline text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  best_time_to_call text DEFAULT '',
  email text DEFAULT '',
  additional_notes text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts to contact_submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
