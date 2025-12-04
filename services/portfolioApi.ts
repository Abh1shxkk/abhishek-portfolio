import apiClient from './apiClient';
import { Project, Testimonial, EducationItem, SkillCategory, SocialLink } from '../types';

// Portfolio API Response Types
export interface ProfileData {
    name: string;
    role: string;
    location: string;
    email: string;
    phone: string;
    bio: string;
    tagline: string;
    availability: string;
    years_experience: string;
}

export interface ExperienceData {
    id: number;
    position: string;
    company: string;
    duration: string;
    description: string;
    tags: string[];
}

export interface StatsData {
    years_experience: number;
    total_projects: number;
    satisfaction_rate: number;
}

// API Service Class
class PortfolioApiService {

    // Get Profile Information
    async getProfile(): Promise<ProfileData> {
        try {
            const response = await apiClient.get<ProfileData>('/profile');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch profile:', error);
            throw error;
        }
    }

    // Get All Projects
    async getProjects(): Promise<Project[]> {
        try {
            const response = await apiClient.get<Project[]>('/projects');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch projects:', error);
            throw error;
        }
    }

    // Get Single Project
    async getProject(id: number): Promise<Project> {
        try {
            const response = await apiClient.get<Project>(`/projects/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Failed to fetch project ${id}:`, error);
            throw error;
        }
    }

    // Get Education History
    async getEducation(): Promise<EducationItem[]> {
        try {
            const response = await apiClient.get<EducationItem[]>('/education');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch education:', error);
            throw error;
        }
    }

    // Get Skills
    async getSkills(): Promise<SkillCategory[]> {
        try {
            const response = await apiClient.get<SkillCategory[]>('/skills');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch skills:', error);
            throw error;
        }
    }

    // Get Simple Skills List (for marquee)
    async getSimpleSkills(): Promise<string[]> {
        try {
            const response = await apiClient.get<string[]>('/skills/simple');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch simple skills:', error);
            throw error;
        }
    }

    // Get Testimonials
    async getTestimonials(): Promise<Testimonial[]> {
        try {
            const response = await apiClient.get<Testimonial[]>('/testimonials');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch testimonials:', error);
            throw error;
        }
    }

    // Get Social Links
    async getSocialLinks(): Promise<SocialLink[]> {
        try {
            const response = await apiClient.get<SocialLink[]>('/socials');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch social links:', error);
            throw error;
        }
    }

    // Get Experience/Work History
    async getExperience(): Promise<ExperienceData[]> {
        try {
            const response = await apiClient.get<ExperienceData[]>('/experience');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch experience:', error);
            throw error;
        }
    }

    // Get Stats
    async getStats(): Promise<StatsData> {
        try {
            const response = await apiClient.get<StatsData>('/stats');
            return response.data;
        } catch (error) {
            console.error('Failed to fetch stats:', error);
            throw error;
        }
    }

    // Submit Contact Form
    async submitContactForm(data: { name: string; email: string; message: string }): Promise<{ success: boolean; message: string }> {
        try {
            const response = await apiClient.post('/contact', data);
            return response.data;
        } catch (error) {
            console.error('Failed to submit contact form:', error);
            throw error;
        }
    }
}

// Export a singleton instance
const portfolioApi = new PortfolioApiService();
export default portfolioApi;
